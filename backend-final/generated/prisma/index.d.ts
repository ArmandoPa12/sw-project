
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Grupo
 * 
 */
export type Grupo = $Result.DefaultSelection<Prisma.$GrupoPayload>
/**
 * Model Nota
 * 
 */
export type Nota = $Result.DefaultSelection<Prisma.$NotaPayload>
/**
 * Model Calendario
 * 
 */
export type Calendario = $Result.DefaultSelection<Prisma.$CalendarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grupo`: Exposes CRUD operations for the **Grupo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupo.findMany()
    * ```
    */
  get grupo(): Prisma.GrupoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nota`: Exposes CRUD operations for the **Nota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notas
    * const notas = await prisma.nota.findMany()
    * ```
    */
  get nota(): Prisma.NotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendario`: Exposes CRUD operations for the **Calendario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendarios
    * const calendarios = await prisma.calendario.findMany()
    * ```
    */
  get calendario(): Prisma.CalendarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Grupo: 'Grupo',
    Nota: 'Nota',
    Calendario: 'Calendario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "grupo" | "nota" | "calendario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Grupo: {
        payload: Prisma.$GrupoPayload<ExtArgs>
        fields: Prisma.GrupoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrupoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrupoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          findFirst: {
            args: Prisma.GrupoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrupoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          findMany: {
            args: Prisma.GrupoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          create: {
            args: Prisma.GrupoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          createMany: {
            args: Prisma.GrupoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrupoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          delete: {
            args: Prisma.GrupoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          update: {
            args: Prisma.GrupoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          deleteMany: {
            args: Prisma.GrupoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrupoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrupoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          upsert: {
            args: Prisma.GrupoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          aggregate: {
            args: Prisma.GrupoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrupo>
          }
          groupBy: {
            args: Prisma.GrupoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrupoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrupoCountArgs<ExtArgs>
            result: $Utils.Optional<GrupoCountAggregateOutputType> | number
          }
        }
      }
      Nota: {
        payload: Prisma.$NotaPayload<ExtArgs>
        fields: Prisma.NotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          findFirst: {
            args: Prisma.NotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          findMany: {
            args: Prisma.NotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>[]
          }
          create: {
            args: Prisma.NotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          createMany: {
            args: Prisma.NotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>[]
          }
          delete: {
            args: Prisma.NotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          update: {
            args: Prisma.NotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          deleteMany: {
            args: Prisma.NotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>[]
          }
          upsert: {
            args: Prisma.NotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          aggregate: {
            args: Prisma.NotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNota>
          }
          groupBy: {
            args: Prisma.NotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotaCountArgs<ExtArgs>
            result: $Utils.Optional<NotaCountAggregateOutputType> | number
          }
        }
      }
      Calendario: {
        payload: Prisma.$CalendarioPayload<ExtArgs>
        fields: Prisma.CalendarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          findFirst: {
            args: Prisma.CalendarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          findMany: {
            args: Prisma.CalendarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>[]
          }
          create: {
            args: Prisma.CalendarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          createMany: {
            args: Prisma.CalendarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>[]
          }
          delete: {
            args: Prisma.CalendarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          update: {
            args: Prisma.CalendarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          deleteMany: {
            args: Prisma.CalendarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>[]
          }
          upsert: {
            args: Prisma.CalendarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          aggregate: {
            args: Prisma.CalendarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendario>
          }
          groupBy: {
            args: Prisma.CalendarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarioCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    grupo?: GrupoOmit
    nota?: NotaOmit
    calendario?: CalendarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    grupo: number
    calendario: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupo?: boolean | UsuarioCountOutputTypeCountGrupoArgs
    calendario?: boolean | UsuarioCountOutputTypeCountCalendarioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountGrupoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCalendarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarioWhereInput
  }


  /**
   * Count Type GrupoCountOutputType
   */

  export type GrupoCountOutputType = {
    notas: number
  }

  export type GrupoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | GrupoCountOutputTypeCountNotasArgs
  }

  // Custom InputTypes
  /**
   * GrupoCountOutputType without action
   */
  export type GrupoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoCountOutputType
     */
    select?: GrupoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrupoCountOutputType without action
   */
  export type GrupoCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    email: string | null
    password: string | null
    esProfesor: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    email: string | null
    password: string | null
    esProfesor: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    usuario: number
    email: number
    password: number
    esProfesor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    usuario?: true
    email?: true
    password?: true
    esProfesor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    usuario?: true
    email?: true
    password?: true
    esProfesor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    usuario?: true
    email?: true
    password?: true
    esProfesor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    usuario: string
    email: string
    password: string
    esProfesor: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    email?: boolean
    password?: boolean
    esProfesor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    calendario?: boolean | Usuario$calendarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    email?: boolean
    password?: boolean
    esProfesor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    email?: boolean
    password?: boolean
    esProfesor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    usuario?: boolean
    email?: boolean
    password?: boolean
    esProfesor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "email" | "password" | "esProfesor" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    calendario?: boolean | Usuario$calendarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      grupo: Prisma.$GrupoPayload<ExtArgs>[]
      calendario: Prisma.$CalendarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string
      email: string
      password: string
      esProfesor: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grupo<T extends Usuario$grupoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$grupoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendario<T extends Usuario$calendarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$calendarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly usuario: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly esProfesor: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.grupo
   */
  export type Usuario$grupoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    cursor?: GrupoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Usuario.calendario
   */
  export type Usuario$calendarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    where?: CalendarioWhereInput
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    cursor?: CalendarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Grupo
   */

  export type AggregateGrupo = {
    _count: GrupoCountAggregateOutputType | null
    _avg: GrupoAvgAggregateOutputType | null
    _sum: GrupoSumAggregateOutputType | null
    _min: GrupoMinAggregateOutputType | null
    _max: GrupoMaxAggregateOutputType | null
  }

  export type GrupoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type GrupoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type GrupoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GrupoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GrupoCountAggregateOutputType = {
    id: number
    nombre: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GrupoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type GrupoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type GrupoMinAggregateInputType = {
    id?: true
    nombre?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GrupoMaxAggregateInputType = {
    id?: true
    nombre?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GrupoCountAggregateInputType = {
    id?: true
    nombre?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GrupoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupo to aggregate.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grupos
    **/
    _count?: true | GrupoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrupoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrupoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrupoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrupoMaxAggregateInputType
  }

  export type GetGrupoAggregateType<T extends GrupoAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupo[P]>
      : GetScalarType<T[P], AggregateGrupo[P]>
  }




  export type GrupoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithAggregationInput | GrupoOrderByWithAggregationInput[]
    by: GrupoScalarFieldEnum[] | GrupoScalarFieldEnum
    having?: GrupoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrupoCountAggregateInputType | true
    _avg?: GrupoAvgAggregateInputType
    _sum?: GrupoSumAggregateInputType
    _min?: GrupoMinAggregateInputType
    _max?: GrupoMaxAggregateInputType
  }

  export type GrupoGroupByOutputType = {
    id: number
    nombre: string
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: GrupoCountAggregateOutputType | null
    _avg: GrupoAvgAggregateOutputType | null
    _sum: GrupoSumAggregateOutputType | null
    _min: GrupoMinAggregateOutputType | null
    _max: GrupoMaxAggregateOutputType | null
  }

  type GetGrupoGroupByPayload<T extends GrupoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrupoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrupoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrupoGroupByOutputType[P]>
            : GetScalarType<T[P], GrupoGroupByOutputType[P]>
        }
      >
    >


  export type GrupoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    notas?: boolean | Grupo$notasArgs<ExtArgs>
    _count?: boolean | GrupoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectScalar = {
    id?: boolean
    nombre?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GrupoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["grupo"]>
  export type GrupoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    notas?: boolean | Grupo$notasArgs<ExtArgs>
    _count?: boolean | GrupoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrupoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type GrupoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $GrupoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grupo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      notas: Prisma.$NotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["grupo"]>
    composites: {}
  }

  type GrupoGetPayload<S extends boolean | null | undefined | GrupoDefaultArgs> = $Result.GetResult<Prisma.$GrupoPayload, S>

  type GrupoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrupoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrupoCountAggregateInputType | true
    }

  export interface GrupoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grupo'], meta: { name: 'Grupo' } }
    /**
     * Find zero or one Grupo that matches the filter.
     * @param {GrupoFindUniqueArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrupoFindUniqueArgs>(args: SelectSubset<T, GrupoFindUniqueArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grupo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrupoFindUniqueOrThrowArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrupoFindUniqueOrThrowArgs>(args: SelectSubset<T, GrupoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grupo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindFirstArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrupoFindFirstArgs>(args?: SelectSubset<T, GrupoFindFirstArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grupo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindFirstOrThrowArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrupoFindFirstOrThrowArgs>(args?: SelectSubset<T, GrupoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupos
     * const grupos = await prisma.grupo.findMany()
     * 
     * // Get first 10 Grupos
     * const grupos = await prisma.grupo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grupoWithIdOnly = await prisma.grupo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrupoFindManyArgs>(args?: SelectSubset<T, GrupoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grupo.
     * @param {GrupoCreateArgs} args - Arguments to create a Grupo.
     * @example
     * // Create one Grupo
     * const Grupo = await prisma.grupo.create({
     *   data: {
     *     // ... data to create a Grupo
     *   }
     * })
     * 
     */
    create<T extends GrupoCreateArgs>(args: SelectSubset<T, GrupoCreateArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grupos.
     * @param {GrupoCreateManyArgs} args - Arguments to create many Grupos.
     * @example
     * // Create many Grupos
     * const grupo = await prisma.grupo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrupoCreateManyArgs>(args?: SelectSubset<T, GrupoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grupos and returns the data saved in the database.
     * @param {GrupoCreateManyAndReturnArgs} args - Arguments to create many Grupos.
     * @example
     * // Create many Grupos
     * const grupo = await prisma.grupo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grupos and only return the `id`
     * const grupoWithIdOnly = await prisma.grupo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrupoCreateManyAndReturnArgs>(args?: SelectSubset<T, GrupoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grupo.
     * @param {GrupoDeleteArgs} args - Arguments to delete one Grupo.
     * @example
     * // Delete one Grupo
     * const Grupo = await prisma.grupo.delete({
     *   where: {
     *     // ... filter to delete one Grupo
     *   }
     * })
     * 
     */
    delete<T extends GrupoDeleteArgs>(args: SelectSubset<T, GrupoDeleteArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grupo.
     * @param {GrupoUpdateArgs} args - Arguments to update one Grupo.
     * @example
     * // Update one Grupo
     * const grupo = await prisma.grupo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrupoUpdateArgs>(args: SelectSubset<T, GrupoUpdateArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grupos.
     * @param {GrupoDeleteManyArgs} args - Arguments to filter Grupos to delete.
     * @example
     * // Delete a few Grupos
     * const { count } = await prisma.grupo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrupoDeleteManyArgs>(args?: SelectSubset<T, GrupoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupos
     * const grupo = await prisma.grupo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrupoUpdateManyArgs>(args: SelectSubset<T, GrupoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos and returns the data updated in the database.
     * @param {GrupoUpdateManyAndReturnArgs} args - Arguments to update many Grupos.
     * @example
     * // Update many Grupos
     * const grupo = await prisma.grupo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grupos and only return the `id`
     * const grupoWithIdOnly = await prisma.grupo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrupoUpdateManyAndReturnArgs>(args: SelectSubset<T, GrupoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grupo.
     * @param {GrupoUpsertArgs} args - Arguments to update or create a Grupo.
     * @example
     * // Update or create a Grupo
     * const grupo = await prisma.grupo.upsert({
     *   create: {
     *     // ... data to create a Grupo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupo we want to update
     *   }
     * })
     */
    upsert<T extends GrupoUpsertArgs>(args: SelectSubset<T, GrupoUpsertArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoCountArgs} args - Arguments to filter Grupos to count.
     * @example
     * // Count the number of Grupos
     * const count = await prisma.grupo.count({
     *   where: {
     *     // ... the filter for the Grupos we want to count
     *   }
     * })
    **/
    count<T extends GrupoCountArgs>(
      args?: Subset<T, GrupoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrupoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrupoAggregateArgs>(args: Subset<T, GrupoAggregateArgs>): Prisma.PrismaPromise<GetGrupoAggregateType<T>>

    /**
     * Group by Grupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrupoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrupoGroupByArgs['orderBy'] }
        : { orderBy?: GrupoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrupoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grupo model
   */
  readonly fields: GrupoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grupo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrupoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notas<T extends Grupo$notasArgs<ExtArgs> = {}>(args?: Subset<T, Grupo$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grupo model
   */
  interface GrupoFieldRefs {
    readonly id: FieldRef<"Grupo", 'Int'>
    readonly nombre: FieldRef<"Grupo", 'String'>
    readonly usuarioId: FieldRef<"Grupo", 'Int'>
    readonly createdAt: FieldRef<"Grupo", 'DateTime'>
    readonly updatedAt: FieldRef<"Grupo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grupo findUnique
   */
  export type GrupoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo findUniqueOrThrow
   */
  export type GrupoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo findFirst
   */
  export type GrupoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Grupo findFirstOrThrow
   */
  export type GrupoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Grupo findMany
   */
  export type GrupoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Grupo create
   */
  export type GrupoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The data needed to create a Grupo.
     */
    data: XOR<GrupoCreateInput, GrupoUncheckedCreateInput>
  }

  /**
   * Grupo createMany
   */
  export type GrupoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grupos.
     */
    data: GrupoCreateManyInput | GrupoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grupo createManyAndReturn
   */
  export type GrupoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * The data used to create many Grupos.
     */
    data: GrupoCreateManyInput | GrupoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grupo update
   */
  export type GrupoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The data needed to update a Grupo.
     */
    data: XOR<GrupoUpdateInput, GrupoUncheckedUpdateInput>
    /**
     * Choose, which Grupo to update.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo updateMany
   */
  export type GrupoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grupos.
     */
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GrupoWhereInput
    /**
     * Limit how many Grupos to update.
     */
    limit?: number
  }

  /**
   * Grupo updateManyAndReturn
   */
  export type GrupoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * The data used to update Grupos.
     */
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GrupoWhereInput
    /**
     * Limit how many Grupos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grupo upsert
   */
  export type GrupoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The filter to search for the Grupo to update in case it exists.
     */
    where: GrupoWhereUniqueInput
    /**
     * In case the Grupo found by the `where` argument doesn't exist, create a new Grupo with this data.
     */
    create: XOR<GrupoCreateInput, GrupoUncheckedCreateInput>
    /**
     * In case the Grupo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrupoUpdateInput, GrupoUncheckedUpdateInput>
  }

  /**
   * Grupo delete
   */
  export type GrupoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter which Grupo to delete.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo deleteMany
   */
  export type GrupoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to delete
     */
    where?: GrupoWhereInput
    /**
     * Limit how many Grupos to delete.
     */
    limit?: number
  }

  /**
   * Grupo.notas
   */
  export type Grupo$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    where?: NotaWhereInput
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    cursor?: NotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Grupo without action
   */
  export type GrupoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
  }


  /**
   * Model Nota
   */

  export type AggregateNota = {
    _count: NotaCountAggregateOutputType | null
    _avg: NotaAvgAggregateOutputType | null
    _sum: NotaSumAggregateOutputType | null
    _min: NotaMinAggregateOutputType | null
    _max: NotaMaxAggregateOutputType | null
  }

  export type NotaAvgAggregateOutputType = {
    id: number | null
    grupoId: number | null
  }

  export type NotaSumAggregateOutputType = {
    id: number | null
    grupoId: number | null
  }

  export type NotaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    grupoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    grupoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotaCountAggregateOutputType = {
    id: number
    titulo: number
    contenido: number
    grupoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotaAvgAggregateInputType = {
    id?: true
    grupoId?: true
  }

  export type NotaSumAggregateInputType = {
    id?: true
    grupoId?: true
  }

  export type NotaMinAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    grupoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotaMaxAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    grupoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotaCountAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    grupoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nota to aggregate.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notas
    **/
    _count?: true | NotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaMaxAggregateInputType
  }

  export type GetNotaAggregateType<T extends NotaAggregateArgs> = {
        [P in keyof T & keyof AggregateNota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNota[P]>
      : GetScalarType<T[P], AggregateNota[P]>
  }




  export type NotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaWhereInput
    orderBy?: NotaOrderByWithAggregationInput | NotaOrderByWithAggregationInput[]
    by: NotaScalarFieldEnum[] | NotaScalarFieldEnum
    having?: NotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaCountAggregateInputType | true
    _avg?: NotaAvgAggregateInputType
    _sum?: NotaSumAggregateInputType
    _min?: NotaMinAggregateInputType
    _max?: NotaMaxAggregateInputType
  }

  export type NotaGroupByOutputType = {
    id: number
    titulo: string
    contenido: string
    grupoId: number
    createdAt: Date
    updatedAt: Date
    _count: NotaCountAggregateOutputType | null
    _avg: NotaAvgAggregateOutputType | null
    _sum: NotaSumAggregateOutputType | null
    _min: NotaMinAggregateOutputType | null
    _max: NotaMaxAggregateOutputType | null
  }

  type GetNotaGroupByPayload<T extends NotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaGroupByOutputType[P]>
            : GetScalarType<T[P], NotaGroupByOutputType[P]>
        }
      >
    >


  export type NotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    grupoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    grupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nota"]>

  export type NotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    grupoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    grupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nota"]>

  export type NotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    grupoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    grupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nota"]>

  export type NotaSelectScalar = {
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    grupoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "contenido" | "grupoId" | "createdAt" | "updatedAt", ExtArgs["result"]["nota"]>
  export type NotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }
  export type NotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }
  export type NotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }

  export type $NotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nota"
    objects: {
      grupo: Prisma.$GrupoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      contenido: string
      grupoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nota"]>
    composites: {}
  }

  type NotaGetPayload<S extends boolean | null | undefined | NotaDefaultArgs> = $Result.GetResult<Prisma.$NotaPayload, S>

  type NotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotaCountAggregateInputType | true
    }

  export interface NotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nota'], meta: { name: 'Nota' } }
    /**
     * Find zero or one Nota that matches the filter.
     * @param {NotaFindUniqueArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaFindUniqueArgs>(args: SelectSubset<T, NotaFindUniqueArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotaFindUniqueOrThrowArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaFindUniqueOrThrowArgs>(args: SelectSubset<T, NotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindFirstArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaFindFirstArgs>(args?: SelectSubset<T, NotaFindFirstArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindFirstOrThrowArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaFindFirstOrThrowArgs>(args?: SelectSubset<T, NotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notas
     * const notas = await prisma.nota.findMany()
     * 
     * // Get first 10 Notas
     * const notas = await prisma.nota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notaWithIdOnly = await prisma.nota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotaFindManyArgs>(args?: SelectSubset<T, NotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nota.
     * @param {NotaCreateArgs} args - Arguments to create a Nota.
     * @example
     * // Create one Nota
     * const Nota = await prisma.nota.create({
     *   data: {
     *     // ... data to create a Nota
     *   }
     * })
     * 
     */
    create<T extends NotaCreateArgs>(args: SelectSubset<T, NotaCreateArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notas.
     * @param {NotaCreateManyArgs} args - Arguments to create many Notas.
     * @example
     * // Create many Notas
     * const nota = await prisma.nota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotaCreateManyArgs>(args?: SelectSubset<T, NotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notas and returns the data saved in the database.
     * @param {NotaCreateManyAndReturnArgs} args - Arguments to create many Notas.
     * @example
     * // Create many Notas
     * const nota = await prisma.nota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notas and only return the `id`
     * const notaWithIdOnly = await prisma.nota.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotaCreateManyAndReturnArgs>(args?: SelectSubset<T, NotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nota.
     * @param {NotaDeleteArgs} args - Arguments to delete one Nota.
     * @example
     * // Delete one Nota
     * const Nota = await prisma.nota.delete({
     *   where: {
     *     // ... filter to delete one Nota
     *   }
     * })
     * 
     */
    delete<T extends NotaDeleteArgs>(args: SelectSubset<T, NotaDeleteArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nota.
     * @param {NotaUpdateArgs} args - Arguments to update one Nota.
     * @example
     * // Update one Nota
     * const nota = await prisma.nota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotaUpdateArgs>(args: SelectSubset<T, NotaUpdateArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notas.
     * @param {NotaDeleteManyArgs} args - Arguments to filter Notas to delete.
     * @example
     * // Delete a few Notas
     * const { count } = await prisma.nota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotaDeleteManyArgs>(args?: SelectSubset<T, NotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notas
     * const nota = await prisma.nota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotaUpdateManyArgs>(args: SelectSubset<T, NotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas and returns the data updated in the database.
     * @param {NotaUpdateManyAndReturnArgs} args - Arguments to update many Notas.
     * @example
     * // Update many Notas
     * const nota = await prisma.nota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notas and only return the `id`
     * const notaWithIdOnly = await prisma.nota.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotaUpdateManyAndReturnArgs>(args: SelectSubset<T, NotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nota.
     * @param {NotaUpsertArgs} args - Arguments to update or create a Nota.
     * @example
     * // Update or create a Nota
     * const nota = await prisma.nota.upsert({
     *   create: {
     *     // ... data to create a Nota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nota we want to update
     *   }
     * })
     */
    upsert<T extends NotaUpsertArgs>(args: SelectSubset<T, NotaUpsertArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaCountArgs} args - Arguments to filter Notas to count.
     * @example
     * // Count the number of Notas
     * const count = await prisma.nota.count({
     *   where: {
     *     // ... the filter for the Notas we want to count
     *   }
     * })
    **/
    count<T extends NotaCountArgs>(
      args?: Subset<T, NotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotaAggregateArgs>(args: Subset<T, NotaAggregateArgs>): Prisma.PrismaPromise<GetNotaAggregateType<T>>

    /**
     * Group by Nota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaGroupByArgs['orderBy'] }
        : { orderBy?: NotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nota model
   */
  readonly fields: NotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grupo<T extends GrupoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrupoDefaultArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nota model
   */
  interface NotaFieldRefs {
    readonly id: FieldRef<"Nota", 'Int'>
    readonly titulo: FieldRef<"Nota", 'String'>
    readonly contenido: FieldRef<"Nota", 'String'>
    readonly grupoId: FieldRef<"Nota", 'Int'>
    readonly createdAt: FieldRef<"Nota", 'DateTime'>
    readonly updatedAt: FieldRef<"Nota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nota findUnique
   */
  export type NotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota findUniqueOrThrow
   */
  export type NotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota findFirst
   */
  export type NotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Nota findFirstOrThrow
   */
  export type NotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Nota findMany
   */
  export type NotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notas.
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Nota create
   */
  export type NotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Nota.
     */
    data: XOR<NotaCreateInput, NotaUncheckedCreateInput>
  }

  /**
   * Nota createMany
   */
  export type NotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notas.
     */
    data: NotaCreateManyInput | NotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nota createManyAndReturn
   */
  export type NotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * The data used to create many Notas.
     */
    data: NotaCreateManyInput | NotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nota update
   */
  export type NotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Nota.
     */
    data: XOR<NotaUpdateInput, NotaUncheckedUpdateInput>
    /**
     * Choose, which Nota to update.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota updateMany
   */
  export type NotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notas.
     */
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyInput>
    /**
     * Filter which Notas to update
     */
    where?: NotaWhereInput
    /**
     * Limit how many Notas to update.
     */
    limit?: number
  }

  /**
   * Nota updateManyAndReturn
   */
  export type NotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * The data used to update Notas.
     */
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyInput>
    /**
     * Filter which Notas to update
     */
    where?: NotaWhereInput
    /**
     * Limit how many Notas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nota upsert
   */
  export type NotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Nota to update in case it exists.
     */
    where: NotaWhereUniqueInput
    /**
     * In case the Nota found by the `where` argument doesn't exist, create a new Nota with this data.
     */
    create: XOR<NotaCreateInput, NotaUncheckedCreateInput>
    /**
     * In case the Nota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaUpdateInput, NotaUncheckedUpdateInput>
  }

  /**
   * Nota delete
   */
  export type NotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter which Nota to delete.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota deleteMany
   */
  export type NotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notas to delete
     */
    where?: NotaWhereInput
    /**
     * Limit how many Notas to delete.
     */
    limit?: number
  }

  /**
   * Nota without action
   */
  export type NotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
  }


  /**
   * Model Calendario
   */

  export type AggregateCalendario = {
    _count: CalendarioCountAggregateOutputType | null
    _avg: CalendarioAvgAggregateOutputType | null
    _sum: CalendarioSumAggregateOutputType | null
    _min: CalendarioMinAggregateOutputType | null
    _max: CalendarioMaxAggregateOutputType | null
  }

  export type CalendarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CalendarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CalendarioMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    evento: string | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarioMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    evento: string | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarioCountAggregateOutputType = {
    id: number
    fecha: number
    evento: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CalendarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CalendarioMinAggregateInputType = {
    id?: true
    fecha?: true
    evento?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarioMaxAggregateInputType = {
    id?: true
    fecha?: true
    evento?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarioCountAggregateInputType = {
    id?: true
    fecha?: true
    evento?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendario to aggregate.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendarios
    **/
    _count?: true | CalendarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarioMaxAggregateInputType
  }

  export type GetCalendarioAggregateType<T extends CalendarioAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendario[P]>
      : GetScalarType<T[P], AggregateCalendario[P]>
  }




  export type CalendarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarioWhereInput
    orderBy?: CalendarioOrderByWithAggregationInput | CalendarioOrderByWithAggregationInput[]
    by: CalendarioScalarFieldEnum[] | CalendarioScalarFieldEnum
    having?: CalendarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarioCountAggregateInputType | true
    _avg?: CalendarioAvgAggregateInputType
    _sum?: CalendarioSumAggregateInputType
    _min?: CalendarioMinAggregateInputType
    _max?: CalendarioMaxAggregateInputType
  }

  export type CalendarioGroupByOutputType = {
    id: number
    fecha: Date
    evento: string
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: CalendarioCountAggregateOutputType | null
    _avg: CalendarioAvgAggregateOutputType | null
    _sum: CalendarioSumAggregateOutputType | null
    _min: CalendarioMinAggregateOutputType | null
    _max: CalendarioMaxAggregateOutputType | null
  }

  type GetCalendarioGroupByPayload<T extends CalendarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarioGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarioGroupByOutputType[P]>
        }
      >
    >


  export type CalendarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    evento?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendario"]>

  export type CalendarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    evento?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendario"]>

  export type CalendarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    evento?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendario"]>

  export type CalendarioSelectScalar = {
    id?: boolean
    fecha?: boolean
    evento?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "evento" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["calendario"]>
  export type CalendarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CalendarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CalendarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CalendarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calendario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      evento: string
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendario"]>
    composites: {}
  }

  type CalendarioGetPayload<S extends boolean | null | undefined | CalendarioDefaultArgs> = $Result.GetResult<Prisma.$CalendarioPayload, S>

  type CalendarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarioCountAggregateInputType | true
    }

  export interface CalendarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calendario'], meta: { name: 'Calendario' } }
    /**
     * Find zero or one Calendario that matches the filter.
     * @param {CalendarioFindUniqueArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarioFindUniqueArgs>(args: SelectSubset<T, CalendarioFindUniqueArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarioFindUniqueOrThrowArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarioFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioFindFirstArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarioFindFirstArgs>(args?: SelectSubset<T, CalendarioFindFirstArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioFindFirstOrThrowArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarioFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendarios
     * const calendarios = await prisma.calendario.findMany()
     * 
     * // Get first 10 Calendarios
     * const calendarios = await prisma.calendario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarioWithIdOnly = await prisma.calendario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarioFindManyArgs>(args?: SelectSubset<T, CalendarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendario.
     * @param {CalendarioCreateArgs} args - Arguments to create a Calendario.
     * @example
     * // Create one Calendario
     * const Calendario = await prisma.calendario.create({
     *   data: {
     *     // ... data to create a Calendario
     *   }
     * })
     * 
     */
    create<T extends CalendarioCreateArgs>(args: SelectSubset<T, CalendarioCreateArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendarios.
     * @param {CalendarioCreateManyArgs} args - Arguments to create many Calendarios.
     * @example
     * // Create many Calendarios
     * const calendario = await prisma.calendario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarioCreateManyArgs>(args?: SelectSubset<T, CalendarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendarios and returns the data saved in the database.
     * @param {CalendarioCreateManyAndReturnArgs} args - Arguments to create many Calendarios.
     * @example
     * // Create many Calendarios
     * const calendario = await prisma.calendario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendarios and only return the `id`
     * const calendarioWithIdOnly = await prisma.calendario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarioCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calendario.
     * @param {CalendarioDeleteArgs} args - Arguments to delete one Calendario.
     * @example
     * // Delete one Calendario
     * const Calendario = await prisma.calendario.delete({
     *   where: {
     *     // ... filter to delete one Calendario
     *   }
     * })
     * 
     */
    delete<T extends CalendarioDeleteArgs>(args: SelectSubset<T, CalendarioDeleteArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendario.
     * @param {CalendarioUpdateArgs} args - Arguments to update one Calendario.
     * @example
     * // Update one Calendario
     * const calendario = await prisma.calendario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarioUpdateArgs>(args: SelectSubset<T, CalendarioUpdateArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendarios.
     * @param {CalendarioDeleteManyArgs} args - Arguments to filter Calendarios to delete.
     * @example
     * // Delete a few Calendarios
     * const { count } = await prisma.calendario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarioDeleteManyArgs>(args?: SelectSubset<T, CalendarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendarios
     * const calendario = await prisma.calendario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarioUpdateManyArgs>(args: SelectSubset<T, CalendarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendarios and returns the data updated in the database.
     * @param {CalendarioUpdateManyAndReturnArgs} args - Arguments to update many Calendarios.
     * @example
     * // Update many Calendarios
     * const calendario = await prisma.calendario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calendarios and only return the `id`
     * const calendarioWithIdOnly = await prisma.calendario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarioUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calendario.
     * @param {CalendarioUpsertArgs} args - Arguments to update or create a Calendario.
     * @example
     * // Update or create a Calendario
     * const calendario = await prisma.calendario.upsert({
     *   create: {
     *     // ... data to create a Calendario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendario we want to update
     *   }
     * })
     */
    upsert<T extends CalendarioUpsertArgs>(args: SelectSubset<T, CalendarioUpsertArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioCountArgs} args - Arguments to filter Calendarios to count.
     * @example
     * // Count the number of Calendarios
     * const count = await prisma.calendario.count({
     *   where: {
     *     // ... the filter for the Calendarios we want to count
     *   }
     * })
    **/
    count<T extends CalendarioCountArgs>(
      args?: Subset<T, CalendarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarioAggregateArgs>(args: Subset<T, CalendarioAggregateArgs>): Prisma.PrismaPromise<GetCalendarioAggregateType<T>>

    /**
     * Group by Calendario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarioGroupByArgs['orderBy'] }
        : { orderBy?: CalendarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calendario model
   */
  readonly fields: CalendarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Calendario model
   */
  interface CalendarioFieldRefs {
    readonly id: FieldRef<"Calendario", 'Int'>
    readonly fecha: FieldRef<"Calendario", 'DateTime'>
    readonly evento: FieldRef<"Calendario", 'String'>
    readonly usuarioId: FieldRef<"Calendario", 'Int'>
    readonly createdAt: FieldRef<"Calendario", 'DateTime'>
    readonly updatedAt: FieldRef<"Calendario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Calendario findUnique
   */
  export type CalendarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario findUniqueOrThrow
   */
  export type CalendarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario findFirst
   */
  export type CalendarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendarios.
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendarios.
     */
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Calendario findFirstOrThrow
   */
  export type CalendarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendarios.
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendarios.
     */
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Calendario findMany
   */
  export type CalendarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendarios to fetch.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendarios.
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Calendario create
   */
  export type CalendarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Calendario.
     */
    data: XOR<CalendarioCreateInput, CalendarioUncheckedCreateInput>
  }

  /**
   * Calendario createMany
   */
  export type CalendarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calendarios.
     */
    data: CalendarioCreateManyInput | CalendarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calendario createManyAndReturn
   */
  export type CalendarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * The data used to create many Calendarios.
     */
    data: CalendarioCreateManyInput | CalendarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calendario update
   */
  export type CalendarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Calendario.
     */
    data: XOR<CalendarioUpdateInput, CalendarioUncheckedUpdateInput>
    /**
     * Choose, which Calendario to update.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario updateMany
   */
  export type CalendarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calendarios.
     */
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyInput>
    /**
     * Filter which Calendarios to update
     */
    where?: CalendarioWhereInput
    /**
     * Limit how many Calendarios to update.
     */
    limit?: number
  }

  /**
   * Calendario updateManyAndReturn
   */
  export type CalendarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * The data used to update Calendarios.
     */
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyInput>
    /**
     * Filter which Calendarios to update
     */
    where?: CalendarioWhereInput
    /**
     * Limit how many Calendarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calendario upsert
   */
  export type CalendarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Calendario to update in case it exists.
     */
    where: CalendarioWhereUniqueInput
    /**
     * In case the Calendario found by the `where` argument doesn't exist, create a new Calendario with this data.
     */
    create: XOR<CalendarioCreateInput, CalendarioUncheckedCreateInput>
    /**
     * In case the Calendario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarioUpdateInput, CalendarioUncheckedUpdateInput>
  }

  /**
   * Calendario delete
   */
  export type CalendarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter which Calendario to delete.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario deleteMany
   */
  export type CalendarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendarios to delete
     */
    where?: CalendarioWhereInput
    /**
     * Limit how many Calendarios to delete.
     */
    limit?: number
  }

  /**
   * Calendario without action
   */
  export type CalendarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    email: 'email',
    password: 'password',
    esProfesor: 'esProfesor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GrupoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GrupoScalarFieldEnum = (typeof GrupoScalarFieldEnum)[keyof typeof GrupoScalarFieldEnum]


  export const NotaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    contenido: 'contenido',
    grupoId: 'grupoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotaScalarFieldEnum = (typeof NotaScalarFieldEnum)[keyof typeof NotaScalarFieldEnum]


  export const CalendarioScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    evento: 'evento',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarioScalarFieldEnum = (typeof CalendarioScalarFieldEnum)[keyof typeof CalendarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    usuario?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    esProfesor?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    grupo?: GrupoListRelationFilter
    calendario?: CalendarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    password?: SortOrder
    esProfesor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    grupo?: GrupoOrderByRelationAggregateInput
    calendario?: CalendarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    esProfesor?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    grupo?: GrupoListRelationFilter
    calendario?: CalendarioListRelationFilter
  }, "id" | "usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    password?: SortOrder
    esProfesor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    usuario?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    esProfesor?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type GrupoWhereInput = {
    AND?: GrupoWhereInput | GrupoWhereInput[]
    OR?: GrupoWhereInput[]
    NOT?: GrupoWhereInput | GrupoWhereInput[]
    id?: IntFilter<"Grupo"> | number
    nombre?: StringFilter<"Grupo"> | string
    usuarioId?: IntFilter<"Grupo"> | number
    createdAt?: DateTimeFilter<"Grupo"> | Date | string
    updatedAt?: DateTimeFilter<"Grupo"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    notas?: NotaListRelationFilter
  }

  export type GrupoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    notas?: NotaOrderByRelationAggregateInput
  }

  export type GrupoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrupoWhereInput | GrupoWhereInput[]
    OR?: GrupoWhereInput[]
    NOT?: GrupoWhereInput | GrupoWhereInput[]
    nombre?: StringFilter<"Grupo"> | string
    usuarioId?: IntFilter<"Grupo"> | number
    createdAt?: DateTimeFilter<"Grupo"> | Date | string
    updatedAt?: DateTimeFilter<"Grupo"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    notas?: NotaListRelationFilter
  }, "id">

  export type GrupoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GrupoCountOrderByAggregateInput
    _avg?: GrupoAvgOrderByAggregateInput
    _max?: GrupoMaxOrderByAggregateInput
    _min?: GrupoMinOrderByAggregateInput
    _sum?: GrupoSumOrderByAggregateInput
  }

  export type GrupoScalarWhereWithAggregatesInput = {
    AND?: GrupoScalarWhereWithAggregatesInput | GrupoScalarWhereWithAggregatesInput[]
    OR?: GrupoScalarWhereWithAggregatesInput[]
    NOT?: GrupoScalarWhereWithAggregatesInput | GrupoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grupo"> | number
    nombre?: StringWithAggregatesFilter<"Grupo"> | string
    usuarioId?: IntWithAggregatesFilter<"Grupo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Grupo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Grupo"> | Date | string
  }

  export type NotaWhereInput = {
    AND?: NotaWhereInput | NotaWhereInput[]
    OR?: NotaWhereInput[]
    NOT?: NotaWhereInput | NotaWhereInput[]
    id?: IntFilter<"Nota"> | number
    titulo?: StringFilter<"Nota"> | string
    contenido?: StringFilter<"Nota"> | string
    grupoId?: IntFilter<"Nota"> | number
    createdAt?: DateTimeFilter<"Nota"> | Date | string
    updatedAt?: DateTimeFilter<"Nota"> | Date | string
    grupo?: XOR<GrupoScalarRelationFilter, GrupoWhereInput>
  }

  export type NotaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    grupoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    grupo?: GrupoOrderByWithRelationInput
  }

  export type NotaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotaWhereInput | NotaWhereInput[]
    OR?: NotaWhereInput[]
    NOT?: NotaWhereInput | NotaWhereInput[]
    titulo?: StringFilter<"Nota"> | string
    contenido?: StringFilter<"Nota"> | string
    grupoId?: IntFilter<"Nota"> | number
    createdAt?: DateTimeFilter<"Nota"> | Date | string
    updatedAt?: DateTimeFilter<"Nota"> | Date | string
    grupo?: XOR<GrupoScalarRelationFilter, GrupoWhereInput>
  }, "id">

  export type NotaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    grupoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotaCountOrderByAggregateInput
    _avg?: NotaAvgOrderByAggregateInput
    _max?: NotaMaxOrderByAggregateInput
    _min?: NotaMinOrderByAggregateInput
    _sum?: NotaSumOrderByAggregateInput
  }

  export type NotaScalarWhereWithAggregatesInput = {
    AND?: NotaScalarWhereWithAggregatesInput | NotaScalarWhereWithAggregatesInput[]
    OR?: NotaScalarWhereWithAggregatesInput[]
    NOT?: NotaScalarWhereWithAggregatesInput | NotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nota"> | number
    titulo?: StringWithAggregatesFilter<"Nota"> | string
    contenido?: StringWithAggregatesFilter<"Nota"> | string
    grupoId?: IntWithAggregatesFilter<"Nota"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Nota"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Nota"> | Date | string
  }

  export type CalendarioWhereInput = {
    AND?: CalendarioWhereInput | CalendarioWhereInput[]
    OR?: CalendarioWhereInput[]
    NOT?: CalendarioWhereInput | CalendarioWhereInput[]
    id?: IntFilter<"Calendario"> | number
    fecha?: DateTimeFilter<"Calendario"> | Date | string
    evento?: StringFilter<"Calendario"> | string
    usuarioId?: IntFilter<"Calendario"> | number
    createdAt?: DateTimeFilter<"Calendario"> | Date | string
    updatedAt?: DateTimeFilter<"Calendario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CalendarioOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    evento?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CalendarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CalendarioWhereInput | CalendarioWhereInput[]
    OR?: CalendarioWhereInput[]
    NOT?: CalendarioWhereInput | CalendarioWhereInput[]
    fecha?: DateTimeFilter<"Calendario"> | Date | string
    evento?: StringFilter<"Calendario"> | string
    usuarioId?: IntFilter<"Calendario"> | number
    createdAt?: DateTimeFilter<"Calendario"> | Date | string
    updatedAt?: DateTimeFilter<"Calendario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type CalendarioOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    evento?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarioCountOrderByAggregateInput
    _avg?: CalendarioAvgOrderByAggregateInput
    _max?: CalendarioMaxOrderByAggregateInput
    _min?: CalendarioMinOrderByAggregateInput
    _sum?: CalendarioSumOrderByAggregateInput
  }

  export type CalendarioScalarWhereWithAggregatesInput = {
    AND?: CalendarioScalarWhereWithAggregatesInput | CalendarioScalarWhereWithAggregatesInput[]
    OR?: CalendarioScalarWhereWithAggregatesInput[]
    NOT?: CalendarioScalarWhereWithAggregatesInput | CalendarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Calendario"> | number
    fecha?: DateTimeWithAggregatesFilter<"Calendario"> | Date | string
    evento?: StringWithAggregatesFilter<"Calendario"> | string
    usuarioId?: IntWithAggregatesFilter<"Calendario"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Calendario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Calendario"> | Date | string
  }

  export type UsuarioCreateInput = {
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grupo?: GrupoCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grupo?: GrupoUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoCreateInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGrupoInput
    notas?: NotaCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notas?: NotaUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGrupoNestedInput
    notas?: NotaUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NotaUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoCreateManyInput = {
    id?: number
    nombre: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GrupoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaCreateInput = {
    titulo: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
    grupo: GrupoCreateNestedOneWithoutNotasInput
  }

  export type NotaUncheckedCreateInput = {
    id?: number
    titulo: string
    contenido: string
    grupoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    grupoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaCreateManyInput = {
    id?: number
    titulo: string
    contenido: string
    grupoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    grupoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioCreateInput = {
    fecha: Date | string
    evento: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCalendarioInput
  }

  export type CalendarioUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    evento: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarioUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalendarioNestedInput
  }

  export type CalendarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioCreateManyInput = {
    id?: number
    fecha: Date | string
    evento: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarioUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GrupoListRelationFilter = {
    every?: GrupoWhereInput
    some?: GrupoWhereInput
    none?: GrupoWhereInput
  }

  export type CalendarioListRelationFilter = {
    every?: CalendarioWhereInput
    some?: CalendarioWhereInput
    none?: CalendarioWhereInput
  }

  export type GrupoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    password?: SortOrder
    esProfesor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    password?: SortOrder
    esProfesor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    password?: SortOrder
    esProfesor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type NotaListRelationFilter = {
    every?: NotaWhereInput
    some?: NotaWhereInput
    none?: NotaWhereInput
  }

  export type NotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrupoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GrupoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type GrupoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GrupoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GrupoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type GrupoScalarRelationFilter = {
    is?: GrupoWhereInput
    isNot?: GrupoWhereInput
  }

  export type NotaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    grupoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaAvgOrderByAggregateInput = {
    id?: SortOrder
    grupoId?: SortOrder
  }

  export type NotaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    grupoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    grupoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaSumOrderByAggregateInput = {
    id?: SortOrder
    grupoId?: SortOrder
  }

  export type CalendarioCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    evento?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CalendarioMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    evento?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarioMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    evento?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type GrupoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<GrupoCreateWithoutUsuarioInput, GrupoUncheckedCreateWithoutUsuarioInput> | GrupoCreateWithoutUsuarioInput[] | GrupoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutUsuarioInput | GrupoCreateOrConnectWithoutUsuarioInput[]
    createMany?: GrupoCreateManyUsuarioInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type CalendarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
  }

  export type GrupoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<GrupoCreateWithoutUsuarioInput, GrupoUncheckedCreateWithoutUsuarioInput> | GrupoCreateWithoutUsuarioInput[] | GrupoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutUsuarioInput | GrupoCreateOrConnectWithoutUsuarioInput[]
    createMany?: GrupoCreateManyUsuarioInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type CalendarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GrupoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<GrupoCreateWithoutUsuarioInput, GrupoUncheckedCreateWithoutUsuarioInput> | GrupoCreateWithoutUsuarioInput[] | GrupoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutUsuarioInput | GrupoCreateOrConnectWithoutUsuarioInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutUsuarioInput | GrupoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: GrupoCreateManyUsuarioInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutUsuarioInput | GrupoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutUsuarioInput | GrupoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type CalendarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalendarioUpsertWithWhereUniqueWithoutUsuarioInput | CalendarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    set?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    disconnect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    delete?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    update?: CalendarioUpdateWithWhereUniqueWithoutUsuarioInput | CalendarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalendarioUpdateManyWithWhereWithoutUsuarioInput | CalendarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GrupoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<GrupoCreateWithoutUsuarioInput, GrupoUncheckedCreateWithoutUsuarioInput> | GrupoCreateWithoutUsuarioInput[] | GrupoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutUsuarioInput | GrupoCreateOrConnectWithoutUsuarioInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutUsuarioInput | GrupoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: GrupoCreateManyUsuarioInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutUsuarioInput | GrupoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutUsuarioInput | GrupoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalendarioUpsertWithWhereUniqueWithoutUsuarioInput | CalendarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    set?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    disconnect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    delete?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    update?: CalendarioUpdateWithWhereUniqueWithoutUsuarioInput | CalendarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalendarioUpdateManyWithWhereWithoutUsuarioInput | CalendarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGrupoInput = {
    create?: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NotaCreateNestedManyWithoutGrupoInput = {
    create?: XOR<NotaCreateWithoutGrupoInput, NotaUncheckedCreateWithoutGrupoInput> | NotaCreateWithoutGrupoInput[] | NotaUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutGrupoInput | NotaCreateOrConnectWithoutGrupoInput[]
    createMany?: NotaCreateManyGrupoInputEnvelope
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
  }

  export type NotaUncheckedCreateNestedManyWithoutGrupoInput = {
    create?: XOR<NotaCreateWithoutGrupoInput, NotaUncheckedCreateWithoutGrupoInput> | NotaCreateWithoutGrupoInput[] | NotaUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutGrupoInput | NotaCreateOrConnectWithoutGrupoInput[]
    createMany?: NotaCreateManyGrupoInputEnvelope
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutGrupoNestedInput = {
    create?: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoInput
    upsert?: UsuarioUpsertWithoutGrupoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGrupoInput, UsuarioUpdateWithoutGrupoInput>, UsuarioUncheckedUpdateWithoutGrupoInput>
  }

  export type NotaUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<NotaCreateWithoutGrupoInput, NotaUncheckedCreateWithoutGrupoInput> | NotaCreateWithoutGrupoInput[] | NotaUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutGrupoInput | NotaCreateOrConnectWithoutGrupoInput[]
    upsert?: NotaUpsertWithWhereUniqueWithoutGrupoInput | NotaUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: NotaCreateManyGrupoInputEnvelope
    set?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    disconnect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    delete?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    update?: NotaUpdateWithWhereUniqueWithoutGrupoInput | NotaUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: NotaUpdateManyWithWhereWithoutGrupoInput | NotaUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: NotaScalarWhereInput | NotaScalarWhereInput[]
  }

  export type NotaUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<NotaCreateWithoutGrupoInput, NotaUncheckedCreateWithoutGrupoInput> | NotaCreateWithoutGrupoInput[] | NotaUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutGrupoInput | NotaCreateOrConnectWithoutGrupoInput[]
    upsert?: NotaUpsertWithWhereUniqueWithoutGrupoInput | NotaUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: NotaCreateManyGrupoInputEnvelope
    set?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    disconnect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    delete?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    update?: NotaUpdateWithWhereUniqueWithoutGrupoInput | NotaUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: NotaUpdateManyWithWhereWithoutGrupoInput | NotaUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: NotaScalarWhereInput | NotaScalarWhereInput[]
  }

  export type GrupoCreateNestedOneWithoutNotasInput = {
    create?: XOR<GrupoCreateWithoutNotasInput, GrupoUncheckedCreateWithoutNotasInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutNotasInput
    connect?: GrupoWhereUniqueInput
  }

  export type GrupoUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<GrupoCreateWithoutNotasInput, GrupoUncheckedCreateWithoutNotasInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutNotasInput
    upsert?: GrupoUpsertWithoutNotasInput
    connect?: GrupoWhereUniqueInput
    update?: XOR<XOR<GrupoUpdateToOneWithWhereWithoutNotasInput, GrupoUpdateWithoutNotasInput>, GrupoUncheckedUpdateWithoutNotasInput>
  }

  export type UsuarioCreateNestedOneWithoutCalendarioInput = {
    create?: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalendarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCalendarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalendarioInput
    upsert?: UsuarioUpsertWithoutCalendarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCalendarioInput, UsuarioUpdateWithoutCalendarioInput>, UsuarioUncheckedUpdateWithoutCalendarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GrupoCreateWithoutUsuarioInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notas?: NotaCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notas?: NotaUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoCreateOrConnectWithoutUsuarioInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutUsuarioInput, GrupoUncheckedCreateWithoutUsuarioInput>
  }

  export type GrupoCreateManyUsuarioInputEnvelope = {
    data: GrupoCreateManyUsuarioInput | GrupoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CalendarioCreateWithoutUsuarioInput = {
    fecha: Date | string
    evento: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha: Date | string
    evento: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarioCreateOrConnectWithoutUsuarioInput = {
    where: CalendarioWhereUniqueInput
    create: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput>
  }

  export type CalendarioCreateManyUsuarioInputEnvelope = {
    data: CalendarioCreateManyUsuarioInput | CalendarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type GrupoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: GrupoWhereUniqueInput
    update: XOR<GrupoUpdateWithoutUsuarioInput, GrupoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<GrupoCreateWithoutUsuarioInput, GrupoUncheckedCreateWithoutUsuarioInput>
  }

  export type GrupoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: GrupoWhereUniqueInput
    data: XOR<GrupoUpdateWithoutUsuarioInput, GrupoUncheckedUpdateWithoutUsuarioInput>
  }

  export type GrupoUpdateManyWithWhereWithoutUsuarioInput = {
    where: GrupoScalarWhereInput
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type GrupoScalarWhereInput = {
    AND?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
    OR?: GrupoScalarWhereInput[]
    NOT?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
    id?: IntFilter<"Grupo"> | number
    nombre?: StringFilter<"Grupo"> | string
    usuarioId?: IntFilter<"Grupo"> | number
    createdAt?: DateTimeFilter<"Grupo"> | Date | string
    updatedAt?: DateTimeFilter<"Grupo"> | Date | string
  }

  export type CalendarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CalendarioWhereUniqueInput
    update: XOR<CalendarioUpdateWithoutUsuarioInput, CalendarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput>
  }

  export type CalendarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CalendarioWhereUniqueInput
    data: XOR<CalendarioUpdateWithoutUsuarioInput, CalendarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type CalendarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: CalendarioScalarWhereInput
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CalendarioScalarWhereInput = {
    AND?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
    OR?: CalendarioScalarWhereInput[]
    NOT?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
    id?: IntFilter<"Calendario"> | number
    fecha?: DateTimeFilter<"Calendario"> | Date | string
    evento?: StringFilter<"Calendario"> | string
    usuarioId?: IntFilter<"Calendario"> | number
    createdAt?: DateTimeFilter<"Calendario"> | Date | string
    updatedAt?: DateTimeFilter<"Calendario"> | Date | string
  }

  export type UsuarioCreateWithoutGrupoInput = {
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGrupoInput = {
    id?: number
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGrupoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput>
  }

  export type NotaCreateWithoutGrupoInput = {
    titulo: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaUncheckedCreateWithoutGrupoInput = {
    id?: number
    titulo: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaCreateOrConnectWithoutGrupoInput = {
    where: NotaWhereUniqueInput
    create: XOR<NotaCreateWithoutGrupoInput, NotaUncheckedCreateWithoutGrupoInput>
  }

  export type NotaCreateManyGrupoInputEnvelope = {
    data: NotaCreateManyGrupoInput | NotaCreateManyGrupoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutGrupoInput = {
    update: XOR<UsuarioUpdateWithoutGrupoInput, UsuarioUncheckedUpdateWithoutGrupoInput>
    create: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGrupoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGrupoInput, UsuarioUncheckedUpdateWithoutGrupoInput>
  }

  export type UsuarioUpdateWithoutGrupoInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGrupoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type NotaUpsertWithWhereUniqueWithoutGrupoInput = {
    where: NotaWhereUniqueInput
    update: XOR<NotaUpdateWithoutGrupoInput, NotaUncheckedUpdateWithoutGrupoInput>
    create: XOR<NotaCreateWithoutGrupoInput, NotaUncheckedCreateWithoutGrupoInput>
  }

  export type NotaUpdateWithWhereUniqueWithoutGrupoInput = {
    where: NotaWhereUniqueInput
    data: XOR<NotaUpdateWithoutGrupoInput, NotaUncheckedUpdateWithoutGrupoInput>
  }

  export type NotaUpdateManyWithWhereWithoutGrupoInput = {
    where: NotaScalarWhereInput
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyWithoutGrupoInput>
  }

  export type NotaScalarWhereInput = {
    AND?: NotaScalarWhereInput | NotaScalarWhereInput[]
    OR?: NotaScalarWhereInput[]
    NOT?: NotaScalarWhereInput | NotaScalarWhereInput[]
    id?: IntFilter<"Nota"> | number
    titulo?: StringFilter<"Nota"> | string
    contenido?: StringFilter<"Nota"> | string
    grupoId?: IntFilter<"Nota"> | number
    createdAt?: DateTimeFilter<"Nota"> | Date | string
    updatedAt?: DateTimeFilter<"Nota"> | Date | string
  }

  export type GrupoCreateWithoutNotasInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGrupoInput
  }

  export type GrupoUncheckedCreateWithoutNotasInput = {
    id?: number
    nombre: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GrupoCreateOrConnectWithoutNotasInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutNotasInput, GrupoUncheckedCreateWithoutNotasInput>
  }

  export type GrupoUpsertWithoutNotasInput = {
    update: XOR<GrupoUpdateWithoutNotasInput, GrupoUncheckedUpdateWithoutNotasInput>
    create: XOR<GrupoCreateWithoutNotasInput, GrupoUncheckedCreateWithoutNotasInput>
    where?: GrupoWhereInput
  }

  export type GrupoUpdateToOneWithWhereWithoutNotasInput = {
    where?: GrupoWhereInput
    data: XOR<GrupoUpdateWithoutNotasInput, GrupoUncheckedUpdateWithoutNotasInput>
  }

  export type GrupoUpdateWithoutNotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutNotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutCalendarioInput = {
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grupo?: GrupoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCalendarioInput = {
    id?: number
    usuario: string
    email: string
    password: string
    esProfesor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grupo?: GrupoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCalendarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
  }

  export type UsuarioUpsertWithoutCalendarioInput = {
    update: XOR<UsuarioUpdateWithoutCalendarioInput, UsuarioUncheckedUpdateWithoutCalendarioInput>
    create: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCalendarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCalendarioInput, UsuarioUncheckedUpdateWithoutCalendarioInput>
  }

  export type UsuarioUpdateWithoutCalendarioInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCalendarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    esProfesor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type GrupoCreateManyUsuarioInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarioCreateManyUsuarioInput = {
    id?: number
    fecha: Date | string
    evento: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GrupoUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NotaUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NotaUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaCreateManyGrupoInput = {
    id?: number
    titulo: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaUpdateWithoutGrupoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaUncheckedUpdateWithoutGrupoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaUncheckedUpdateManyWithoutGrupoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}