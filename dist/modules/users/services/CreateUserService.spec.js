"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _fakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/fakeCacheProvider"));

var _FakeHashProvider = _interopRequireDefault(require("../Providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUserRepository = _interopRequireDefault(require("../repositories/Fakes/FakeUserRepository"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeHashProvider;
let createUser;
let fakeCacheProvider;
describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUserRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    fakeCacheProvider = new _fakeCacheProvider.default();
    createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider, fakeCacheProvider);
  });
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });
    await expect(user).toHaveProperty('id');
  });
  it('should not be able to create a new user with same email from anther', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });
    await expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});