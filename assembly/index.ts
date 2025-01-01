import {postgresql} from "@hypermode/modus-sdk-as"
import { LoginStatus, RegistrationStatus } from "./enums";
import { Sha256 } from "./sha256";

const game_database_connection = "game-database"

@json
class User{
  username!: string
}

export function sayHello(name: string | null = null): string {
  return `Hello, ${name || "World"}!`;
}

export function getUsers(): User[][] {
  const query = "select * from \"User\""
  const response = postgresql.query<User[]>(game_database_connection, query)
  return response.rows
}

export function registerUser(username: string, password: string): string {
  let password_hash = Sha256.hash(Uint8Array.wrap(String.UTF8.encode(password))).toString()
  const query = `SELECT registeruser('${username}', '${password_hash}')`
  const response = postgresql.query<string>(game_database_connection, query)
  return response.rows[1]
}

export function loginUser(username: string, password: string): LoginStatus{
  return LoginStatus.Success;
}