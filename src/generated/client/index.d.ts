
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model VideoItem
 * 
 */
export type VideoItem = $Result.DefaultSelection<Prisma.$VideoItemPayload>
/**
 * Model LeaderboardItem
 * 
 */
export type LeaderboardItem = $Result.DefaultSelection<Prisma.$LeaderboardItemPayload>
/**
 * Model DayActivity
 * 
 */
export type DayActivity = $Result.DefaultSelection<Prisma.$DayActivityPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model ExamAttempt
 * 
 */
export type ExamAttempt = $Result.DefaultSelection<Prisma.$ExamAttemptPayload>
/**
 * Model AttemptAnswer
 * 
 */
export type AttemptAnswer = $Result.DefaultSelection<Prisma.$AttemptAnswerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoItem`: Exposes CRUD operations for the **VideoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoItems
    * const videoItems = await prisma.videoItem.findMany()
    * ```
    */
  get videoItem(): Prisma.VideoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboardItem`: Exposes CRUD operations for the **LeaderboardItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderboardItems
    * const leaderboardItems = await prisma.leaderboardItem.findMany()
    * ```
    */
  get leaderboardItem(): Prisma.LeaderboardItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dayActivity`: Exposes CRUD operations for the **DayActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayActivities
    * const dayActivities = await prisma.dayActivity.findMany()
    * ```
    */
  get dayActivity(): Prisma.DayActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examAttempt`: Exposes CRUD operations for the **ExamAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamAttempts
    * const examAttempts = await prisma.examAttempt.findMany()
    * ```
    */
  get examAttempt(): Prisma.ExamAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attemptAnswer`: Exposes CRUD operations for the **AttemptAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttemptAnswers
    * const attemptAnswers = await prisma.attemptAnswer.findMany()
    * ```
    */
  get attemptAnswer(): Prisma.AttemptAnswerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    School: 'School',
    VideoItem: 'VideoItem',
    LeaderboardItem: 'LeaderboardItem',
    DayActivity: 'DayActivity',
    Exam: 'Exam',
    Question: 'Question',
    ExamAttempt: 'ExamAttempt',
    AttemptAnswer: 'AttemptAnswer'
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
      modelProps: "user" | "school" | "videoItem" | "leaderboardItem" | "dayActivity" | "exam" | "question" | "examAttempt" | "attemptAnswer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      VideoItem: {
        payload: Prisma.$VideoItemPayload<ExtArgs>
        fields: Prisma.VideoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>
          }
          findFirst: {
            args: Prisma.VideoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>
          }
          findMany: {
            args: Prisma.VideoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>[]
          }
          create: {
            args: Prisma.VideoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>
          }
          createMany: {
            args: Prisma.VideoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>[]
          }
          delete: {
            args: Prisma.VideoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>
          }
          update: {
            args: Prisma.VideoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>
          }
          deleteMany: {
            args: Prisma.VideoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>[]
          }
          upsert: {
            args: Prisma.VideoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>
          }
          aggregate: {
            args: Prisma.VideoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoItem>
          }
          groupBy: {
            args: Prisma.VideoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoItemCountArgs<ExtArgs>
            result: $Utils.Optional<VideoItemCountAggregateOutputType> | number
          }
        }
      }
      LeaderboardItem: {
        payload: Prisma.$LeaderboardItemPayload<ExtArgs>
        fields: Prisma.LeaderboardItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>
          }
          findMany: {
            args: Prisma.LeaderboardItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>[]
          }
          create: {
            args: Prisma.LeaderboardItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>
          }
          createMany: {
            args: Prisma.LeaderboardItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>
          }
          update: {
            args: Prisma.LeaderboardItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboardItem>
          }
          groupBy: {
            args: Prisma.LeaderboardItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardItemCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardItemCountAggregateOutputType> | number
          }
        }
      }
      DayActivity: {
        payload: Prisma.$DayActivityPayload<ExtArgs>
        fields: Prisma.DayActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          findFirst: {
            args: Prisma.DayActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          findMany: {
            args: Prisma.DayActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[]
          }
          create: {
            args: Prisma.DayActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          createMany: {
            args: Prisma.DayActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[]
          }
          delete: {
            args: Prisma.DayActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          update: {
            args: Prisma.DayActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          deleteMany: {
            args: Prisma.DayActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DayActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[]
          }
          upsert: {
            args: Prisma.DayActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          aggregate: {
            args: Prisma.DayActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayActivity>
          }
          groupBy: {
            args: Prisma.DayActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DayActivityCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      ExamAttempt: {
        payload: Prisma.$ExamAttemptPayload<ExtArgs>
        fields: Prisma.ExamAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          findFirst: {
            args: Prisma.ExamAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          findMany: {
            args: Prisma.ExamAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          create: {
            args: Prisma.ExamAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          createMany: {
            args: Prisma.ExamAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          delete: {
            args: Prisma.ExamAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          update: {
            args: Prisma.ExamAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          deleteMany: {
            args: Prisma.ExamAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          upsert: {
            args: Prisma.ExamAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          aggregate: {
            args: Prisma.ExamAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamAttempt>
          }
          groupBy: {
            args: Prisma.ExamAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<ExamAttemptCountAggregateOutputType> | number
          }
        }
      }
      AttemptAnswer: {
        payload: Prisma.$AttemptAnswerPayload<ExtArgs>
        fields: Prisma.AttemptAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          findFirst: {
            args: Prisma.AttemptAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          findMany: {
            args: Prisma.AttemptAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>[]
          }
          create: {
            args: Prisma.AttemptAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          createMany: {
            args: Prisma.AttemptAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>[]
          }
          delete: {
            args: Prisma.AttemptAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          update: {
            args: Prisma.AttemptAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          deleteMany: {
            args: Prisma.AttemptAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>[]
          }
          upsert: {
            args: Prisma.AttemptAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          aggregate: {
            args: Prisma.AttemptAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttemptAnswer>
          }
          groupBy: {
            args: Prisma.AttemptAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptAnswerCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    school?: SchoolOmit
    videoItem?: VideoItemOmit
    leaderboardItem?: LeaderboardItemOmit
    dayActivity?: DayActivityOmit
    exam?: ExamOmit
    question?: QuestionOmit
    examAttempt?: ExamAttemptOmit
    attemptAnswer?: AttemptAnswerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    questions: number
    attempts: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    attempts?: boolean | ExamCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptAnswerWhereInput
  }


  /**
   * Count Type ExamAttemptCountOutputType
   */

  export type ExamAttemptCountOutputType = {
    answers: number
  }

  export type ExamAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ExamAttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * ExamAttemptCountOutputType without action
   */
  export type ExamAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttemptCountOutputType
     */
    select?: ExamAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamAttemptCountOutputType without action
   */
  export type ExamAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    userName: string | null
    fullName: string | null
    phoneNumber: string | null
    schoolName: string | null
    schoolGrade: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    userName: string | null
    fullName: string | null
    phoneNumber: string | null
    schoolName: string | null
    schoolGrade: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    userName: number
    fullName: number
    phoneNumber: number
    schoolName: number
    schoolGrade: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    userName?: true
    fullName?: true
    phoneNumber?: true
    schoolName?: true
    schoolGrade?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    userName?: true
    fullName?: true
    phoneNumber?: true
    schoolName?: true
    schoolGrade?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    userName?: true
    fullName?: true
    phoneNumber?: true
    schoolName?: true
    schoolGrade?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    userName: string
    fullName: string
    phoneNumber: string
    schoolName: string
    schoolGrade: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    userName?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    schoolName?: boolean
    schoolGrade?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    userName?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    schoolName?: boolean
    schoolGrade?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    userName?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    schoolName?: boolean
    schoolGrade?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    userName?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    schoolName?: boolean
    schoolGrade?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "userName" | "fullName" | "phoneNumber" | "schoolName" | "schoolGrade" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      userName: string
      fullName: string
      phoneNumber: string
      schoolName: string
      schoolGrade: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly schoolName: FieldRef<"User", 'String'>
    readonly schoolGrade: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    schoolCode: string | null
    schoolName: string | null
    schoolShortName: string | null
    schoolLogo: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    schoolCode: string | null
    schoolName: string | null
    schoolShortName: string | null
    schoolLogo: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    schoolCode: number
    schoolName: number
    schoolShortName: number
    schoolLogo: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    schoolCode?: true
    schoolName?: true
    schoolShortName?: true
    schoolLogo?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    schoolCode?: true
    schoolName?: true
    schoolShortName?: true
    schoolLogo?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    schoolCode?: true
    schoolName?: true
    schoolShortName?: true
    schoolLogo?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    schoolCode: string
    schoolName: string
    schoolShortName: string
    schoolLogo: string | null
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolCode?: boolean
    schoolName?: boolean
    schoolShortName?: boolean
    schoolLogo?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolCode?: boolean
    schoolName?: boolean
    schoolShortName?: boolean
    schoolLogo?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolCode?: boolean
    schoolName?: boolean
    schoolShortName?: boolean
    schoolLogo?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    schoolCode?: boolean
    schoolName?: boolean
    schoolShortName?: boolean
    schoolLogo?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolCode" | "schoolName" | "schoolShortName" | "schoolLogo", ExtArgs["result"]["school"]>

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolCode: string
      schoolName: string
      schoolShortName: string
      schoolLogo: string | null
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly schoolCode: FieldRef<"School", 'String'>
    readonly schoolName: FieldRef<"School", 'String'>
    readonly schoolShortName: FieldRef<"School", 'String'>
    readonly schoolLogo: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
  }


  /**
   * Model VideoItem
   */

  export type AggregateVideoItem = {
    _count: VideoItemCountAggregateOutputType | null
    _avg: VideoItemAvgAggregateOutputType | null
    _sum: VideoItemSumAggregateOutputType | null
    _min: VideoItemMinAggregateOutputType | null
    _max: VideoItemMaxAggregateOutputType | null
  }

  export type VideoItemAvgAggregateOutputType = {
    id: number | null
  }

  export type VideoItemSumAggregateOutputType = {
    id: number | null
  }

  export type VideoItemMinAggregateOutputType = {
    id: number | null
    category: string | null
    thumbnail: string | null
    title: string | null
    duration: string | null
    instructor: string | null
    views: string | null
    videoUrl: string | null
  }

  export type VideoItemMaxAggregateOutputType = {
    id: number | null
    category: string | null
    thumbnail: string | null
    title: string | null
    duration: string | null
    instructor: string | null
    views: string | null
    videoUrl: string | null
  }

  export type VideoItemCountAggregateOutputType = {
    id: number
    category: number
    thumbnail: number
    title: number
    duration: number
    instructor: number
    views: number
    videoUrl: number
    _all: number
  }


  export type VideoItemAvgAggregateInputType = {
    id?: true
  }

  export type VideoItemSumAggregateInputType = {
    id?: true
  }

  export type VideoItemMinAggregateInputType = {
    id?: true
    category?: true
    thumbnail?: true
    title?: true
    duration?: true
    instructor?: true
    views?: true
    videoUrl?: true
  }

  export type VideoItemMaxAggregateInputType = {
    id?: true
    category?: true
    thumbnail?: true
    title?: true
    duration?: true
    instructor?: true
    views?: true
    videoUrl?: true
  }

  export type VideoItemCountAggregateInputType = {
    id?: true
    category?: true
    thumbnail?: true
    title?: true
    duration?: true
    instructor?: true
    views?: true
    videoUrl?: true
    _all?: true
  }

  export type VideoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoItem to aggregate.
     */
    where?: VideoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoItems to fetch.
     */
    orderBy?: VideoItemOrderByWithRelationInput | VideoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoItems
    **/
    _count?: true | VideoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoItemMaxAggregateInputType
  }

  export type GetVideoItemAggregateType<T extends VideoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoItem[P]>
      : GetScalarType<T[P], AggregateVideoItem[P]>
  }




  export type VideoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoItemWhereInput
    orderBy?: VideoItemOrderByWithAggregationInput | VideoItemOrderByWithAggregationInput[]
    by: VideoItemScalarFieldEnum[] | VideoItemScalarFieldEnum
    having?: VideoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoItemCountAggregateInputType | true
    _avg?: VideoItemAvgAggregateInputType
    _sum?: VideoItemSumAggregateInputType
    _min?: VideoItemMinAggregateInputType
    _max?: VideoItemMaxAggregateInputType
  }

  export type VideoItemGroupByOutputType = {
    id: number
    category: string
    thumbnail: string
    title: string
    duration: string
    instructor: string
    views: string
    videoUrl: string | null
    _count: VideoItemCountAggregateOutputType | null
    _avg: VideoItemAvgAggregateOutputType | null
    _sum: VideoItemSumAggregateOutputType | null
    _min: VideoItemMinAggregateOutputType | null
    _max: VideoItemMaxAggregateOutputType | null
  }

  type GetVideoItemGroupByPayload<T extends VideoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoItemGroupByOutputType[P]>
            : GetScalarType<T[P], VideoItemGroupByOutputType[P]>
        }
      >
    >


  export type VideoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    thumbnail?: boolean
    title?: boolean
    duration?: boolean
    instructor?: boolean
    views?: boolean
    videoUrl?: boolean
  }, ExtArgs["result"]["videoItem"]>

  export type VideoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    thumbnail?: boolean
    title?: boolean
    duration?: boolean
    instructor?: boolean
    views?: boolean
    videoUrl?: boolean
  }, ExtArgs["result"]["videoItem"]>

  export type VideoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    thumbnail?: boolean
    title?: boolean
    duration?: boolean
    instructor?: boolean
    views?: boolean
    videoUrl?: boolean
  }, ExtArgs["result"]["videoItem"]>

  export type VideoItemSelectScalar = {
    id?: boolean
    category?: boolean
    thumbnail?: boolean
    title?: boolean
    duration?: boolean
    instructor?: boolean
    views?: boolean
    videoUrl?: boolean
  }

  export type VideoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "thumbnail" | "title" | "duration" | "instructor" | "views" | "videoUrl", ExtArgs["result"]["videoItem"]>

  export type $VideoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      thumbnail: string
      title: string
      duration: string
      instructor: string
      views: string
      videoUrl: string | null
    }, ExtArgs["result"]["videoItem"]>
    composites: {}
  }

  type VideoItemGetPayload<S extends boolean | null | undefined | VideoItemDefaultArgs> = $Result.GetResult<Prisma.$VideoItemPayload, S>

  type VideoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoItemCountAggregateInputType | true
    }

  export interface VideoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoItem'], meta: { name: 'VideoItem' } }
    /**
     * Find zero or one VideoItem that matches the filter.
     * @param {VideoItemFindUniqueArgs} args - Arguments to find a VideoItem
     * @example
     * // Get one VideoItem
     * const videoItem = await prisma.videoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoItemFindUniqueArgs>(args: SelectSubset<T, VideoItemFindUniqueArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoItemFindUniqueOrThrowArgs} args - Arguments to find a VideoItem
     * @example
     * // Get one VideoItem
     * const videoItem = await prisma.videoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemFindFirstArgs} args - Arguments to find a VideoItem
     * @example
     * // Get one VideoItem
     * const videoItem = await prisma.videoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoItemFindFirstArgs>(args?: SelectSubset<T, VideoItemFindFirstArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemFindFirstOrThrowArgs} args - Arguments to find a VideoItem
     * @example
     * // Get one VideoItem
     * const videoItem = await prisma.videoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoItems
     * const videoItems = await prisma.videoItem.findMany()
     * 
     * // Get first 10 VideoItems
     * const videoItems = await prisma.videoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoItemWithIdOnly = await prisma.videoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoItemFindManyArgs>(args?: SelectSubset<T, VideoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoItem.
     * @param {VideoItemCreateArgs} args - Arguments to create a VideoItem.
     * @example
     * // Create one VideoItem
     * const VideoItem = await prisma.videoItem.create({
     *   data: {
     *     // ... data to create a VideoItem
     *   }
     * })
     * 
     */
    create<T extends VideoItemCreateArgs>(args: SelectSubset<T, VideoItemCreateArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoItems.
     * @param {VideoItemCreateManyArgs} args - Arguments to create many VideoItems.
     * @example
     * // Create many VideoItems
     * const videoItem = await prisma.videoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoItemCreateManyArgs>(args?: SelectSubset<T, VideoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoItems and returns the data saved in the database.
     * @param {VideoItemCreateManyAndReturnArgs} args - Arguments to create many VideoItems.
     * @example
     * // Create many VideoItems
     * const videoItem = await prisma.videoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoItems and only return the `id`
     * const videoItemWithIdOnly = await prisma.videoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoItem.
     * @param {VideoItemDeleteArgs} args - Arguments to delete one VideoItem.
     * @example
     * // Delete one VideoItem
     * const VideoItem = await prisma.videoItem.delete({
     *   where: {
     *     // ... filter to delete one VideoItem
     *   }
     * })
     * 
     */
    delete<T extends VideoItemDeleteArgs>(args: SelectSubset<T, VideoItemDeleteArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoItem.
     * @param {VideoItemUpdateArgs} args - Arguments to update one VideoItem.
     * @example
     * // Update one VideoItem
     * const videoItem = await prisma.videoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoItemUpdateArgs>(args: SelectSubset<T, VideoItemUpdateArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoItems.
     * @param {VideoItemDeleteManyArgs} args - Arguments to filter VideoItems to delete.
     * @example
     * // Delete a few VideoItems
     * const { count } = await prisma.videoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoItemDeleteManyArgs>(args?: SelectSubset<T, VideoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoItems
     * const videoItem = await prisma.videoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoItemUpdateManyArgs>(args: SelectSubset<T, VideoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoItems and returns the data updated in the database.
     * @param {VideoItemUpdateManyAndReturnArgs} args - Arguments to update many VideoItems.
     * @example
     * // Update many VideoItems
     * const videoItem = await prisma.videoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoItems and only return the `id`
     * const videoItemWithIdOnly = await prisma.videoItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoItem.
     * @param {VideoItemUpsertArgs} args - Arguments to update or create a VideoItem.
     * @example
     * // Update or create a VideoItem
     * const videoItem = await prisma.videoItem.upsert({
     *   create: {
     *     // ... data to create a VideoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoItem we want to update
     *   }
     * })
     */
    upsert<T extends VideoItemUpsertArgs>(args: SelectSubset<T, VideoItemUpsertArgs<ExtArgs>>): Prisma__VideoItemClient<$Result.GetResult<Prisma.$VideoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemCountArgs} args - Arguments to filter VideoItems to count.
     * @example
     * // Count the number of VideoItems
     * const count = await prisma.videoItem.count({
     *   where: {
     *     // ... the filter for the VideoItems we want to count
     *   }
     * })
    **/
    count<T extends VideoItemCountArgs>(
      args?: Subset<T, VideoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoItemAggregateArgs>(args: Subset<T, VideoItemAggregateArgs>): Prisma.PrismaPromise<GetVideoItemAggregateType<T>>

    /**
     * Group by VideoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoItemGroupByArgs} args - Group by arguments.
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
      T extends VideoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoItemGroupByArgs['orderBy'] }
        : { orderBy?: VideoItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoItem model
   */
  readonly fields: VideoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VideoItem model
   */
  interface VideoItemFieldRefs {
    readonly id: FieldRef<"VideoItem", 'Int'>
    readonly category: FieldRef<"VideoItem", 'String'>
    readonly thumbnail: FieldRef<"VideoItem", 'String'>
    readonly title: FieldRef<"VideoItem", 'String'>
    readonly duration: FieldRef<"VideoItem", 'String'>
    readonly instructor: FieldRef<"VideoItem", 'String'>
    readonly views: FieldRef<"VideoItem", 'String'>
    readonly videoUrl: FieldRef<"VideoItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoItem findUnique
   */
  export type VideoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * Filter, which VideoItem to fetch.
     */
    where: VideoItemWhereUniqueInput
  }

  /**
   * VideoItem findUniqueOrThrow
   */
  export type VideoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * Filter, which VideoItem to fetch.
     */
    where: VideoItemWhereUniqueInput
  }

  /**
   * VideoItem findFirst
   */
  export type VideoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * Filter, which VideoItem to fetch.
     */
    where?: VideoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoItems to fetch.
     */
    orderBy?: VideoItemOrderByWithRelationInput | VideoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoItems.
     */
    cursor?: VideoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoItems.
     */
    distinct?: VideoItemScalarFieldEnum | VideoItemScalarFieldEnum[]
  }

  /**
   * VideoItem findFirstOrThrow
   */
  export type VideoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * Filter, which VideoItem to fetch.
     */
    where?: VideoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoItems to fetch.
     */
    orderBy?: VideoItemOrderByWithRelationInput | VideoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoItems.
     */
    cursor?: VideoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoItems.
     */
    distinct?: VideoItemScalarFieldEnum | VideoItemScalarFieldEnum[]
  }

  /**
   * VideoItem findMany
   */
  export type VideoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * Filter, which VideoItems to fetch.
     */
    where?: VideoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoItems to fetch.
     */
    orderBy?: VideoItemOrderByWithRelationInput | VideoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoItems.
     */
    cursor?: VideoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoItems.
     */
    skip?: number
    distinct?: VideoItemScalarFieldEnum | VideoItemScalarFieldEnum[]
  }

  /**
   * VideoItem create
   */
  export type VideoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * The data needed to create a VideoItem.
     */
    data: XOR<VideoItemCreateInput, VideoItemUncheckedCreateInput>
  }

  /**
   * VideoItem createMany
   */
  export type VideoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoItems.
     */
    data: VideoItemCreateManyInput | VideoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoItem createManyAndReturn
   */
  export type VideoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * The data used to create many VideoItems.
     */
    data: VideoItemCreateManyInput | VideoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoItem update
   */
  export type VideoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * The data needed to update a VideoItem.
     */
    data: XOR<VideoItemUpdateInput, VideoItemUncheckedUpdateInput>
    /**
     * Choose, which VideoItem to update.
     */
    where: VideoItemWhereUniqueInput
  }

  /**
   * VideoItem updateMany
   */
  export type VideoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoItems.
     */
    data: XOR<VideoItemUpdateManyMutationInput, VideoItemUncheckedUpdateManyInput>
    /**
     * Filter which VideoItems to update
     */
    where?: VideoItemWhereInput
    /**
     * Limit how many VideoItems to update.
     */
    limit?: number
  }

  /**
   * VideoItem updateManyAndReturn
   */
  export type VideoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * The data used to update VideoItems.
     */
    data: XOR<VideoItemUpdateManyMutationInput, VideoItemUncheckedUpdateManyInput>
    /**
     * Filter which VideoItems to update
     */
    where?: VideoItemWhereInput
    /**
     * Limit how many VideoItems to update.
     */
    limit?: number
  }

  /**
   * VideoItem upsert
   */
  export type VideoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * The filter to search for the VideoItem to update in case it exists.
     */
    where: VideoItemWhereUniqueInput
    /**
     * In case the VideoItem found by the `where` argument doesn't exist, create a new VideoItem with this data.
     */
    create: XOR<VideoItemCreateInput, VideoItemUncheckedCreateInput>
    /**
     * In case the VideoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoItemUpdateInput, VideoItemUncheckedUpdateInput>
  }

  /**
   * VideoItem delete
   */
  export type VideoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
    /**
     * Filter which VideoItem to delete.
     */
    where: VideoItemWhereUniqueInput
  }

  /**
   * VideoItem deleteMany
   */
  export type VideoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoItems to delete
     */
    where?: VideoItemWhereInput
    /**
     * Limit how many VideoItems to delete.
     */
    limit?: number
  }

  /**
   * VideoItem without action
   */
  export type VideoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null
  }


  /**
   * Model LeaderboardItem
   */

  export type AggregateLeaderboardItem = {
    _count: LeaderboardItemCountAggregateOutputType | null
    _avg: LeaderboardItemAvgAggregateOutputType | null
    _sum: LeaderboardItemSumAggregateOutputType | null
    _min: LeaderboardItemMinAggregateOutputType | null
    _max: LeaderboardItemMaxAggregateOutputType | null
  }

  export type LeaderboardItemAvgAggregateOutputType = {
    id: number | null
    rank: number | null
  }

  export type LeaderboardItemSumAggregateOutputType = {
    id: number | null
    rank: number | null
  }

  export type LeaderboardItemMinAggregateOutputType = {
    id: number | null
    rank: number | null
    init: string | null
    name: string | null
    type: string | null
    points: string | null
  }

  export type LeaderboardItemMaxAggregateOutputType = {
    id: number | null
    rank: number | null
    init: string | null
    name: string | null
    type: string | null
    points: string | null
  }

  export type LeaderboardItemCountAggregateOutputType = {
    id: number
    rank: number
    init: number
    name: number
    type: number
    points: number
    _all: number
  }


  export type LeaderboardItemAvgAggregateInputType = {
    id?: true
    rank?: true
  }

  export type LeaderboardItemSumAggregateInputType = {
    id?: true
    rank?: true
  }

  export type LeaderboardItemMinAggregateInputType = {
    id?: true
    rank?: true
    init?: true
    name?: true
    type?: true
    points?: true
  }

  export type LeaderboardItemMaxAggregateInputType = {
    id?: true
    rank?: true
    init?: true
    name?: true
    type?: true
    points?: true
  }

  export type LeaderboardItemCountAggregateInputType = {
    id?: true
    rank?: true
    init?: true
    name?: true
    type?: true
    points?: true
    _all?: true
  }

  export type LeaderboardItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardItem to aggregate.
     */
    where?: LeaderboardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?: LeaderboardItemOrderByWithRelationInput | LeaderboardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderboardItems
    **/
    _count?: true | LeaderboardItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardItemMaxAggregateInputType
  }

  export type GetLeaderboardItemAggregateType<T extends LeaderboardItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboardItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboardItem[P]>
      : GetScalarType<T[P], AggregateLeaderboardItem[P]>
  }




  export type LeaderboardItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardItemWhereInput
    orderBy?: LeaderboardItemOrderByWithAggregationInput | LeaderboardItemOrderByWithAggregationInput[]
    by: LeaderboardItemScalarFieldEnum[] | LeaderboardItemScalarFieldEnum
    having?: LeaderboardItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardItemCountAggregateInputType | true
    _avg?: LeaderboardItemAvgAggregateInputType
    _sum?: LeaderboardItemSumAggregateInputType
    _min?: LeaderboardItemMinAggregateInputType
    _max?: LeaderboardItemMaxAggregateInputType
  }

  export type LeaderboardItemGroupByOutputType = {
    id: number
    rank: number
    init: string
    name: string
    type: string
    points: string
    _count: LeaderboardItemCountAggregateOutputType | null
    _avg: LeaderboardItemAvgAggregateOutputType | null
    _sum: LeaderboardItemSumAggregateOutputType | null
    _min: LeaderboardItemMinAggregateOutputType | null
    _max: LeaderboardItemMaxAggregateOutputType | null
  }

  type GetLeaderboardItemGroupByPayload<T extends LeaderboardItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardItemGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardItemGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rank?: boolean
    init?: boolean
    name?: boolean
    type?: boolean
    points?: boolean
  }, ExtArgs["result"]["leaderboardItem"]>

  export type LeaderboardItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rank?: boolean
    init?: boolean
    name?: boolean
    type?: boolean
    points?: boolean
  }, ExtArgs["result"]["leaderboardItem"]>

  export type LeaderboardItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rank?: boolean
    init?: boolean
    name?: boolean
    type?: boolean
    points?: boolean
  }, ExtArgs["result"]["leaderboardItem"]>

  export type LeaderboardItemSelectScalar = {
    id?: boolean
    rank?: boolean
    init?: boolean
    name?: boolean
    type?: boolean
    points?: boolean
  }

  export type LeaderboardItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rank" | "init" | "name" | "type" | "points", ExtArgs["result"]["leaderboardItem"]>

  export type $LeaderboardItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderboardItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rank: number
      init: string
      name: string
      type: string
      points: string
    }, ExtArgs["result"]["leaderboardItem"]>
    composites: {}
  }

  type LeaderboardItemGetPayload<S extends boolean | null | undefined | LeaderboardItemDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardItemPayload, S>

  type LeaderboardItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardItemCountAggregateInputType | true
    }

  export interface LeaderboardItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderboardItem'], meta: { name: 'LeaderboardItem' } }
    /**
     * Find zero or one LeaderboardItem that matches the filter.
     * @param {LeaderboardItemFindUniqueArgs} args - Arguments to find a LeaderboardItem
     * @example
     * // Get one LeaderboardItem
     * const leaderboardItem = await prisma.leaderboardItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardItemFindUniqueArgs>(args: SelectSubset<T, LeaderboardItemFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderboardItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardItemFindUniqueOrThrowArgs} args - Arguments to find a LeaderboardItem
     * @example
     * // Get one LeaderboardItem
     * const leaderboardItem = await prisma.leaderboardItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemFindFirstArgs} args - Arguments to find a LeaderboardItem
     * @example
     * // Get one LeaderboardItem
     * const leaderboardItem = await prisma.leaderboardItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardItemFindFirstArgs>(args?: SelectSubset<T, LeaderboardItemFindFirstArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemFindFirstOrThrowArgs} args - Arguments to find a LeaderboardItem
     * @example
     * // Get one LeaderboardItem
     * const leaderboardItem = await prisma.leaderboardItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderboardItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderboardItems
     * const leaderboardItems = await prisma.leaderboardItem.findMany()
     * 
     * // Get first 10 LeaderboardItems
     * const leaderboardItems = await prisma.leaderboardItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardItemWithIdOnly = await prisma.leaderboardItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardItemFindManyArgs>(args?: SelectSubset<T, LeaderboardItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderboardItem.
     * @param {LeaderboardItemCreateArgs} args - Arguments to create a LeaderboardItem.
     * @example
     * // Create one LeaderboardItem
     * const LeaderboardItem = await prisma.leaderboardItem.create({
     *   data: {
     *     // ... data to create a LeaderboardItem
     *   }
     * })
     * 
     */
    create<T extends LeaderboardItemCreateArgs>(args: SelectSubset<T, LeaderboardItemCreateArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderboardItems.
     * @param {LeaderboardItemCreateManyArgs} args - Arguments to create many LeaderboardItems.
     * @example
     * // Create many LeaderboardItems
     * const leaderboardItem = await prisma.leaderboardItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardItemCreateManyArgs>(args?: SelectSubset<T, LeaderboardItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderboardItems and returns the data saved in the database.
     * @param {LeaderboardItemCreateManyAndReturnArgs} args - Arguments to create many LeaderboardItems.
     * @example
     * // Create many LeaderboardItems
     * const leaderboardItem = await prisma.leaderboardItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderboardItems and only return the `id`
     * const leaderboardItemWithIdOnly = await prisma.leaderboardItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardItemCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderboardItem.
     * @param {LeaderboardItemDeleteArgs} args - Arguments to delete one LeaderboardItem.
     * @example
     * // Delete one LeaderboardItem
     * const LeaderboardItem = await prisma.leaderboardItem.delete({
     *   where: {
     *     // ... filter to delete one LeaderboardItem
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardItemDeleteArgs>(args: SelectSubset<T, LeaderboardItemDeleteArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderboardItem.
     * @param {LeaderboardItemUpdateArgs} args - Arguments to update one LeaderboardItem.
     * @example
     * // Update one LeaderboardItem
     * const leaderboardItem = await prisma.leaderboardItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardItemUpdateArgs>(args: SelectSubset<T, LeaderboardItemUpdateArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderboardItems.
     * @param {LeaderboardItemDeleteManyArgs} args - Arguments to filter LeaderboardItems to delete.
     * @example
     * // Delete a few LeaderboardItems
     * const { count } = await prisma.leaderboardItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardItemDeleteManyArgs>(args?: SelectSubset<T, LeaderboardItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderboardItems
     * const leaderboardItem = await prisma.leaderboardItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardItemUpdateManyArgs>(args: SelectSubset<T, LeaderboardItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardItems and returns the data updated in the database.
     * @param {LeaderboardItemUpdateManyAndReturnArgs} args - Arguments to update many LeaderboardItems.
     * @example
     * // Update many LeaderboardItems
     * const leaderboardItem = await prisma.leaderboardItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderboardItems and only return the `id`
     * const leaderboardItemWithIdOnly = await prisma.leaderboardItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaderboardItemUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderboardItem.
     * @param {LeaderboardItemUpsertArgs} args - Arguments to update or create a LeaderboardItem.
     * @example
     * // Update or create a LeaderboardItem
     * const leaderboardItem = await prisma.leaderboardItem.upsert({
     *   create: {
     *     // ... data to create a LeaderboardItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderboardItem we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardItemUpsertArgs>(args: SelectSubset<T, LeaderboardItemUpsertArgs<ExtArgs>>): Prisma__LeaderboardItemClient<$Result.GetResult<Prisma.$LeaderboardItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderboardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemCountArgs} args - Arguments to filter LeaderboardItems to count.
     * @example
     * // Count the number of LeaderboardItems
     * const count = await prisma.leaderboardItem.count({
     *   where: {
     *     // ... the filter for the LeaderboardItems we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardItemCountArgs>(
      args?: Subset<T, LeaderboardItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderboardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaderboardItemAggregateArgs>(args: Subset<T, LeaderboardItemAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardItemAggregateType<T>>

    /**
     * Group by LeaderboardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardItemGroupByArgs} args - Group by arguments.
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
      T extends LeaderboardItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardItemGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaderboardItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderboardItem model
   */
  readonly fields: LeaderboardItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderboardItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LeaderboardItem model
   */
  interface LeaderboardItemFieldRefs {
    readonly id: FieldRef<"LeaderboardItem", 'Int'>
    readonly rank: FieldRef<"LeaderboardItem", 'Int'>
    readonly init: FieldRef<"LeaderboardItem", 'String'>
    readonly name: FieldRef<"LeaderboardItem", 'String'>
    readonly type: FieldRef<"LeaderboardItem", 'String'>
    readonly points: FieldRef<"LeaderboardItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaderboardItem findUnique
   */
  export type LeaderboardItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where: LeaderboardItemWhereUniqueInput
  }

  /**
   * LeaderboardItem findUniqueOrThrow
   */
  export type LeaderboardItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where: LeaderboardItemWhereUniqueInput
  }

  /**
   * LeaderboardItem findFirst
   */
  export type LeaderboardItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where?: LeaderboardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?: LeaderboardItemOrderByWithRelationInput | LeaderboardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardItems.
     */
    cursor?: LeaderboardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardItems.
     */
    distinct?: LeaderboardItemScalarFieldEnum | LeaderboardItemScalarFieldEnum[]
  }

  /**
   * LeaderboardItem findFirstOrThrow
   */
  export type LeaderboardItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where?: LeaderboardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?: LeaderboardItemOrderByWithRelationInput | LeaderboardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardItems.
     */
    cursor?: LeaderboardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardItems.
     */
    distinct?: LeaderboardItemScalarFieldEnum | LeaderboardItemScalarFieldEnum[]
  }

  /**
   * LeaderboardItem findMany
   */
  export type LeaderboardItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardItems to fetch.
     */
    where?: LeaderboardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?: LeaderboardItemOrderByWithRelationInput | LeaderboardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderboardItems.
     */
    cursor?: LeaderboardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number
    distinct?: LeaderboardItemScalarFieldEnum | LeaderboardItemScalarFieldEnum[]
  }

  /**
   * LeaderboardItem create
   */
  export type LeaderboardItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * The data needed to create a LeaderboardItem.
     */
    data: XOR<LeaderboardItemCreateInput, LeaderboardItemUncheckedCreateInput>
  }

  /**
   * LeaderboardItem createMany
   */
  export type LeaderboardItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderboardItems.
     */
    data: LeaderboardItemCreateManyInput | LeaderboardItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderboardItem createManyAndReturn
   */
  export type LeaderboardItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderboardItems.
     */
    data: LeaderboardItemCreateManyInput | LeaderboardItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderboardItem update
   */
  export type LeaderboardItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * The data needed to update a LeaderboardItem.
     */
    data: XOR<LeaderboardItemUpdateInput, LeaderboardItemUncheckedUpdateInput>
    /**
     * Choose, which LeaderboardItem to update.
     */
    where: LeaderboardItemWhereUniqueInput
  }

  /**
   * LeaderboardItem updateMany
   */
  export type LeaderboardItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderboardItems.
     */
    data: XOR<LeaderboardItemUpdateManyMutationInput, LeaderboardItemUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardItems to update
     */
    where?: LeaderboardItemWhereInput
    /**
     * Limit how many LeaderboardItems to update.
     */
    limit?: number
  }

  /**
   * LeaderboardItem updateManyAndReturn
   */
  export type LeaderboardItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * The data used to update LeaderboardItems.
     */
    data: XOR<LeaderboardItemUpdateManyMutationInput, LeaderboardItemUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardItems to update
     */
    where?: LeaderboardItemWhereInput
    /**
     * Limit how many LeaderboardItems to update.
     */
    limit?: number
  }

  /**
   * LeaderboardItem upsert
   */
  export type LeaderboardItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * The filter to search for the LeaderboardItem to update in case it exists.
     */
    where: LeaderboardItemWhereUniqueInput
    /**
     * In case the LeaderboardItem found by the `where` argument doesn't exist, create a new LeaderboardItem with this data.
     */
    create: XOR<LeaderboardItemCreateInput, LeaderboardItemUncheckedCreateInput>
    /**
     * In case the LeaderboardItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardItemUpdateInput, LeaderboardItemUncheckedUpdateInput>
  }

  /**
   * LeaderboardItem delete
   */
  export type LeaderboardItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
    /**
     * Filter which LeaderboardItem to delete.
     */
    where: LeaderboardItemWhereUniqueInput
  }

  /**
   * LeaderboardItem deleteMany
   */
  export type LeaderboardItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardItems to delete
     */
    where?: LeaderboardItemWhereInput
    /**
     * Limit how many LeaderboardItems to delete.
     */
    limit?: number
  }

  /**
   * LeaderboardItem without action
   */
  export type LeaderboardItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null
  }


  /**
   * Model DayActivity
   */

  export type AggregateDayActivity = {
    _count: DayActivityCountAggregateOutputType | null
    _avg: DayActivityAvgAggregateOutputType | null
    _sum: DayActivitySumAggregateOutputType | null
    _min: DayActivityMinAggregateOutputType | null
    _max: DayActivityMaxAggregateOutputType | null
  }

  export type DayActivityAvgAggregateOutputType = {
    id: number | null
  }

  export type DayActivitySumAggregateOutputType = {
    id: number | null
  }

  export type DayActivityMinAggregateOutputType = {
    id: number | null
    day: string | null
  }

  export type DayActivityMaxAggregateOutputType = {
    id: number | null
    day: string | null
  }

  export type DayActivityCountAggregateOutputType = {
    id: number
    day: number
    active: number
    _all: number
  }


  export type DayActivityAvgAggregateInputType = {
    id?: true
  }

  export type DayActivitySumAggregateInputType = {
    id?: true
  }

  export type DayActivityMinAggregateInputType = {
    id?: true
    day?: true
  }

  export type DayActivityMaxAggregateInputType = {
    id?: true
    day?: true
  }

  export type DayActivityCountAggregateInputType = {
    id?: true
    day?: true
    active?: true
    _all?: true
  }

  export type DayActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayActivity to aggregate.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayActivities
    **/
    _count?: true | DayActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayActivityMaxAggregateInputType
  }

  export type GetDayActivityAggregateType<T extends DayActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDayActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayActivity[P]>
      : GetScalarType<T[P], AggregateDayActivity[P]>
  }




  export type DayActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayActivityWhereInput
    orderBy?: DayActivityOrderByWithAggregationInput | DayActivityOrderByWithAggregationInput[]
    by: DayActivityScalarFieldEnum[] | DayActivityScalarFieldEnum
    having?: DayActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayActivityCountAggregateInputType | true
    _avg?: DayActivityAvgAggregateInputType
    _sum?: DayActivitySumAggregateInputType
    _min?: DayActivityMinAggregateInputType
    _max?: DayActivityMaxAggregateInputType
  }

  export type DayActivityGroupByOutputType = {
    id: number
    day: string
    active: boolean[]
    _count: DayActivityCountAggregateOutputType | null
    _avg: DayActivityAvgAggregateOutputType | null
    _sum: DayActivitySumAggregateOutputType | null
    _min: DayActivityMinAggregateOutputType | null
    _max: DayActivityMaxAggregateOutputType | null
  }

  type GetDayActivityGroupByPayload<T extends DayActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DayActivityGroupByOutputType[P]>
        }
      >
    >


  export type DayActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    active?: boolean
  }, ExtArgs["result"]["dayActivity"]>

  export type DayActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    active?: boolean
  }, ExtArgs["result"]["dayActivity"]>

  export type DayActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    active?: boolean
  }, ExtArgs["result"]["dayActivity"]>

  export type DayActivitySelectScalar = {
    id?: boolean
    day?: boolean
    active?: boolean
  }

  export type DayActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "active", ExtArgs["result"]["dayActivity"]>

  export type $DayActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: string
      active: boolean[]
    }, ExtArgs["result"]["dayActivity"]>
    composites: {}
  }

  type DayActivityGetPayload<S extends boolean | null | undefined | DayActivityDefaultArgs> = $Result.GetResult<Prisma.$DayActivityPayload, S>

  type DayActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayActivityCountAggregateInputType | true
    }

  export interface DayActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayActivity'], meta: { name: 'DayActivity' } }
    /**
     * Find zero or one DayActivity that matches the filter.
     * @param {DayActivityFindUniqueArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayActivityFindUniqueArgs>(args: SelectSubset<T, DayActivityFindUniqueArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DayActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayActivityFindUniqueOrThrowArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DayActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityFindFirstArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayActivityFindFirstArgs>(args?: SelectSubset<T, DayActivityFindFirstArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityFindFirstOrThrowArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DayActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DayActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayActivities
     * const dayActivities = await prisma.dayActivity.findMany()
     * 
     * // Get first 10 DayActivities
     * const dayActivities = await prisma.dayActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayActivityWithIdOnly = await prisma.dayActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayActivityFindManyArgs>(args?: SelectSubset<T, DayActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DayActivity.
     * @param {DayActivityCreateArgs} args - Arguments to create a DayActivity.
     * @example
     * // Create one DayActivity
     * const DayActivity = await prisma.dayActivity.create({
     *   data: {
     *     // ... data to create a DayActivity
     *   }
     * })
     * 
     */
    create<T extends DayActivityCreateArgs>(args: SelectSubset<T, DayActivityCreateArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DayActivities.
     * @param {DayActivityCreateManyArgs} args - Arguments to create many DayActivities.
     * @example
     * // Create many DayActivities
     * const dayActivity = await prisma.dayActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayActivityCreateManyArgs>(args?: SelectSubset<T, DayActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayActivities and returns the data saved in the database.
     * @param {DayActivityCreateManyAndReturnArgs} args - Arguments to create many DayActivities.
     * @example
     * // Create many DayActivities
     * const dayActivity = await prisma.dayActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayActivities and only return the `id`
     * const dayActivityWithIdOnly = await prisma.dayActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, DayActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DayActivity.
     * @param {DayActivityDeleteArgs} args - Arguments to delete one DayActivity.
     * @example
     * // Delete one DayActivity
     * const DayActivity = await prisma.dayActivity.delete({
     *   where: {
     *     // ... filter to delete one DayActivity
     *   }
     * })
     * 
     */
    delete<T extends DayActivityDeleteArgs>(args: SelectSubset<T, DayActivityDeleteArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DayActivity.
     * @param {DayActivityUpdateArgs} args - Arguments to update one DayActivity.
     * @example
     * // Update one DayActivity
     * const dayActivity = await prisma.dayActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayActivityUpdateArgs>(args: SelectSubset<T, DayActivityUpdateArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DayActivities.
     * @param {DayActivityDeleteManyArgs} args - Arguments to filter DayActivities to delete.
     * @example
     * // Delete a few DayActivities
     * const { count } = await prisma.dayActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayActivityDeleteManyArgs>(args?: SelectSubset<T, DayActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayActivities
     * const dayActivity = await prisma.dayActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayActivityUpdateManyArgs>(args: SelectSubset<T, DayActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayActivities and returns the data updated in the database.
     * @param {DayActivityUpdateManyAndReturnArgs} args - Arguments to update many DayActivities.
     * @example
     * // Update many DayActivities
     * const dayActivity = await prisma.dayActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DayActivities and only return the `id`
     * const dayActivityWithIdOnly = await prisma.dayActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends DayActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, DayActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DayActivity.
     * @param {DayActivityUpsertArgs} args - Arguments to update or create a DayActivity.
     * @example
     * // Update or create a DayActivity
     * const dayActivity = await prisma.dayActivity.upsert({
     *   create: {
     *     // ... data to create a DayActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayActivity we want to update
     *   }
     * })
     */
    upsert<T extends DayActivityUpsertArgs>(args: SelectSubset<T, DayActivityUpsertArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DayActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityCountArgs} args - Arguments to filter DayActivities to count.
     * @example
     * // Count the number of DayActivities
     * const count = await prisma.dayActivity.count({
     *   where: {
     *     // ... the filter for the DayActivities we want to count
     *   }
     * })
    **/
    count<T extends DayActivityCountArgs>(
      args?: Subset<T, DayActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DayActivityAggregateArgs>(args: Subset<T, DayActivityAggregateArgs>): Prisma.PrismaPromise<GetDayActivityAggregateType<T>>

    /**
     * Group by DayActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityGroupByArgs} args - Group by arguments.
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
      T extends DayActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayActivityGroupByArgs['orderBy'] }
        : { orderBy?: DayActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DayActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayActivity model
   */
  readonly fields: DayActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DayActivity model
   */
  interface DayActivityFieldRefs {
    readonly id: FieldRef<"DayActivity", 'Int'>
    readonly day: FieldRef<"DayActivity", 'String'>
    readonly active: FieldRef<"DayActivity", 'Boolean[]'>
  }
    

  // Custom InputTypes
  /**
   * DayActivity findUnique
   */
  export type DayActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity findUniqueOrThrow
   */
  export type DayActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity findFirst
   */
  export type DayActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayActivities.
     */
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[]
  }

  /**
   * DayActivity findFirstOrThrow
   */
  export type DayActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayActivities.
     */
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[]
  }

  /**
   * DayActivity findMany
   */
  export type DayActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivities to fetch.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[]
  }

  /**
   * DayActivity create
   */
  export type DayActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a DayActivity.
     */
    data: XOR<DayActivityCreateInput, DayActivityUncheckedCreateInput>
  }

  /**
   * DayActivity createMany
   */
  export type DayActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayActivities.
     */
    data: DayActivityCreateManyInput | DayActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayActivity createManyAndReturn
   */
  export type DayActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data used to create many DayActivities.
     */
    data: DayActivityCreateManyInput | DayActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayActivity update
   */
  export type DayActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a DayActivity.
     */
    data: XOR<DayActivityUpdateInput, DayActivityUncheckedUpdateInput>
    /**
     * Choose, which DayActivity to update.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity updateMany
   */
  export type DayActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayActivities.
     */
    data: XOR<DayActivityUpdateManyMutationInput, DayActivityUncheckedUpdateManyInput>
    /**
     * Filter which DayActivities to update
     */
    where?: DayActivityWhereInput
    /**
     * Limit how many DayActivities to update.
     */
    limit?: number
  }

  /**
   * DayActivity updateManyAndReturn
   */
  export type DayActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data used to update DayActivities.
     */
    data: XOR<DayActivityUpdateManyMutationInput, DayActivityUncheckedUpdateManyInput>
    /**
     * Filter which DayActivities to update
     */
    where?: DayActivityWhereInput
    /**
     * Limit how many DayActivities to update.
     */
    limit?: number
  }

  /**
   * DayActivity upsert
   */
  export type DayActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the DayActivity to update in case it exists.
     */
    where: DayActivityWhereUniqueInput
    /**
     * In case the DayActivity found by the `where` argument doesn't exist, create a new DayActivity with this data.
     */
    create: XOR<DayActivityCreateInput, DayActivityUncheckedCreateInput>
    /**
     * In case the DayActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayActivityUpdateInput, DayActivityUncheckedUpdateInput>
  }

  /**
   * DayActivity delete
   */
  export type DayActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter which DayActivity to delete.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity deleteMany
   */
  export type DayActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayActivities to delete
     */
    where?: DayActivityWhereInput
    /**
     * Limit how many DayActivities to delete.
     */
    limit?: number
  }

  /**
   * DayActivity without action
   */
  export type DayActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    time_limit_minutes: number | null
    passing_score: number | null
  }

  export type ExamSumAggregateOutputType = {
    time_limit_minutes: number | null
    passing_score: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    time_limit_minutes: number | null
    passing_score: number | null
    is_published: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    time_limit_minutes: number | null
    passing_score: number | null
    is_published: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    description: number
    time_limit_minutes: number
    passing_score: number
    is_published: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    time_limit_minutes?: true
    passing_score?: true
  }

  export type ExamSumAggregateInputType = {
    time_limit_minutes?: true
    passing_score?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    time_limit_minutes?: true
    passing_score?: true
    is_published?: true
    created_at?: true
    updated_at?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    time_limit_minutes?: true
    passing_score?: true
    is_published?: true
    created_at?: true
    updated_at?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    time_limit_minutes?: true
    passing_score?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    description: string | null
    time_limit_minutes: number | null
    passing_score: number
    is_published: boolean
    created_at: Date
    updated_at: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    time_limit_minutes?: boolean
    passing_score?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    attempts?: boolean | Exam$attemptsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    time_limit_minutes?: boolean
    passing_score?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    time_limit_minutes?: boolean
    passing_score?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    time_limit_minutes?: boolean
    passing_score?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "time_limit_minutes" | "passing_score" | "is_published" | "created_at" | "updated_at", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    attempts?: boolean | Exam$attemptsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      attempts: Prisma.$ExamAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      time_limit_minutes: number | null
      passing_score: number
      is_published: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends Exam$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly description: FieldRef<"Exam", 'String'>
    readonly time_limit_minutes: FieldRef<"Exam", 'Int'>
    readonly passing_score: FieldRef<"Exam", 'Int'>
    readonly is_published: FieldRef<"Exam", 'Boolean'>
    readonly created_at: FieldRef<"Exam", 'DateTime'>
    readonly updated_at: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Exam.attempts
   */
  export type Exam$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    cursor?: ExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    points: number | null
    order_index: number | null
  }

  export type QuestionSumAggregateOutputType = {
    points: number | null
    order_index: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    exam_id: string | null
    content: string | null
    question_type: string | null
    correct_answer: string | null
    explanation: string | null
    points: number | null
    order_index: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    exam_id: string | null
    content: string | null
    question_type: string | null
    correct_answer: string | null
    explanation: string | null
    points: number | null
    order_index: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    exam_id: number
    content: number
    question_type: number
    options: number
    correct_answer: number
    explanation: number
    points: number
    order_index: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    points?: true
    order_index?: true
  }

  export type QuestionSumAggregateInputType = {
    points?: true
    order_index?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    exam_id?: true
    content?: true
    question_type?: true
    correct_answer?: true
    explanation?: true
    points?: true
    order_index?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    exam_id?: true
    content?: true
    question_type?: true
    correct_answer?: true
    explanation?: true
    points?: true
    order_index?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    exam_id?: true
    content?: true
    question_type?: true
    options?: true
    correct_answer?: true
    explanation?: true
    points?: true
    order_index?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    exam_id: string
    content: string
    question_type: string
    options: JsonValue | null
    correct_answer: string | null
    explanation: string | null
    points: number
    order_index: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    content?: boolean
    question_type?: boolean
    options?: boolean
    correct_answer?: boolean
    explanation?: boolean
    points?: boolean
    order_index?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    content?: boolean
    question_type?: boolean
    options?: boolean
    correct_answer?: boolean
    explanation?: boolean
    points?: boolean
    order_index?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    content?: boolean
    question_type?: boolean
    options?: boolean
    correct_answer?: boolean
    explanation?: boolean
    points?: boolean
    order_index?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    exam_id?: boolean
    content?: boolean
    question_type?: boolean
    options?: boolean
    correct_answer?: boolean
    explanation?: boolean
    points?: boolean
    order_index?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exam_id" | "content" | "question_type" | "options" | "correct_answer" | "explanation" | "points" | "order_index", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      answers: Prisma.$AttemptAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exam_id: string
      content: string
      question_type: string
      options: Prisma.JsonValue | null
      correct_answer: string | null
      explanation: string | null
      points: number
      order_index: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly exam_id: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly question_type: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'Json'>
    readonly correct_answer: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly points: FieldRef<"Question", 'Int'>
    readonly order_index: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    where?: AttemptAnswerWhereInput
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    cursor?: AttemptAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model ExamAttempt
   */

  export type AggregateExamAttempt = {
    _count: ExamAttemptCountAggregateOutputType | null
    _avg: ExamAttemptAvgAggregateOutputType | null
    _sum: ExamAttemptSumAggregateOutputType | null
    _min: ExamAttemptMinAggregateOutputType | null
    _max: ExamAttemptMaxAggregateOutputType | null
  }

  export type ExamAttemptAvgAggregateOutputType = {
    score: number | null
  }

  export type ExamAttemptSumAggregateOutputType = {
    score: number | null
  }

  export type ExamAttemptMinAggregateOutputType = {
    id: string | null
    exam_id: string | null
    student_name: string | null
    student_email: string | null
    started_at: Date | null
    submitted_at: Date | null
    score: number | null
    passed: boolean | null
  }

  export type ExamAttemptMaxAggregateOutputType = {
    id: string | null
    exam_id: string | null
    student_name: string | null
    student_email: string | null
    started_at: Date | null
    submitted_at: Date | null
    score: number | null
    passed: boolean | null
  }

  export type ExamAttemptCountAggregateOutputType = {
    id: number
    exam_id: number
    student_name: number
    student_email: number
    started_at: number
    submitted_at: number
    score: number
    passed: number
    _all: number
  }


  export type ExamAttemptAvgAggregateInputType = {
    score?: true
  }

  export type ExamAttemptSumAggregateInputType = {
    score?: true
  }

  export type ExamAttemptMinAggregateInputType = {
    id?: true
    exam_id?: true
    student_name?: true
    student_email?: true
    started_at?: true
    submitted_at?: true
    score?: true
    passed?: true
  }

  export type ExamAttemptMaxAggregateInputType = {
    id?: true
    exam_id?: true
    student_name?: true
    student_email?: true
    started_at?: true
    submitted_at?: true
    score?: true
    passed?: true
  }

  export type ExamAttemptCountAggregateInputType = {
    id?: true
    exam_id?: true
    student_name?: true
    student_email?: true
    started_at?: true
    submitted_at?: true
    score?: true
    passed?: true
    _all?: true
  }

  export type ExamAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAttempt to aggregate.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamAttempts
    **/
    _count?: true | ExamAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamAttemptMaxAggregateInputType
  }

  export type GetExamAttemptAggregateType<T extends ExamAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateExamAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamAttempt[P]>
      : GetScalarType<T[P], AggregateExamAttempt[P]>
  }




  export type ExamAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithAggregationInput | ExamAttemptOrderByWithAggregationInput[]
    by: ExamAttemptScalarFieldEnum[] | ExamAttemptScalarFieldEnum
    having?: ExamAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamAttemptCountAggregateInputType | true
    _avg?: ExamAttemptAvgAggregateInputType
    _sum?: ExamAttemptSumAggregateInputType
    _min?: ExamAttemptMinAggregateInputType
    _max?: ExamAttemptMaxAggregateInputType
  }

  export type ExamAttemptGroupByOutputType = {
    id: string
    exam_id: string
    student_name: string
    student_email: string
    started_at: Date
    submitted_at: Date | null
    score: number | null
    passed: boolean | null
    _count: ExamAttemptCountAggregateOutputType | null
    _avg: ExamAttemptAvgAggregateOutputType | null
    _sum: ExamAttemptSumAggregateOutputType | null
    _min: ExamAttemptMinAggregateOutputType | null
    _max: ExamAttemptMaxAggregateOutputType | null
  }

  type GetExamAttemptGroupByPayload<T extends ExamAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], ExamAttemptGroupByOutputType[P]>
        }
      >
    >


  export type ExamAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    student_name?: boolean
    student_email?: boolean
    started_at?: boolean
    submitted_at?: boolean
    score?: boolean
    passed?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | ExamAttempt$answersArgs<ExtArgs>
    _count?: boolean | ExamAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    student_name?: boolean
    student_email?: boolean
    started_at?: boolean
    submitted_at?: boolean
    score?: boolean
    passed?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    student_name?: boolean
    student_email?: boolean
    started_at?: boolean
    submitted_at?: boolean
    score?: boolean
    passed?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectScalar = {
    id?: boolean
    exam_id?: boolean
    student_name?: boolean
    student_email?: boolean
    started_at?: boolean
    submitted_at?: boolean
    score?: boolean
    passed?: boolean
  }

  export type ExamAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exam_id" | "student_name" | "student_email" | "started_at" | "submitted_at" | "score" | "passed", ExtArgs["result"]["examAttempt"]>
  export type ExamAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | ExamAttempt$answersArgs<ExtArgs>
    _count?: boolean | ExamAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $ExamAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamAttempt"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      answers: Prisma.$AttemptAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exam_id: string
      student_name: string
      student_email: string
      started_at: Date
      submitted_at: Date | null
      score: number | null
      passed: boolean | null
    }, ExtArgs["result"]["examAttempt"]>
    composites: {}
  }

  type ExamAttemptGetPayload<S extends boolean | null | undefined | ExamAttemptDefaultArgs> = $Result.GetResult<Prisma.$ExamAttemptPayload, S>

  type ExamAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamAttemptCountAggregateInputType | true
    }

  export interface ExamAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamAttempt'], meta: { name: 'ExamAttempt' } }
    /**
     * Find zero or one ExamAttempt that matches the filter.
     * @param {ExamAttemptFindUniqueArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamAttemptFindUniqueArgs>(args: SelectSubset<T, ExamAttemptFindUniqueArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamAttemptFindUniqueOrThrowArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindFirstArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamAttemptFindFirstArgs>(args?: SelectSubset<T, ExamAttemptFindFirstArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindFirstOrThrowArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamAttempts
     * const examAttempts = await prisma.examAttempt.findMany()
     * 
     * // Get first 10 ExamAttempts
     * const examAttempts = await prisma.examAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamAttemptFindManyArgs>(args?: SelectSubset<T, ExamAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamAttempt.
     * @param {ExamAttemptCreateArgs} args - Arguments to create a ExamAttempt.
     * @example
     * // Create one ExamAttempt
     * const ExamAttempt = await prisma.examAttempt.create({
     *   data: {
     *     // ... data to create a ExamAttempt
     *   }
     * })
     * 
     */
    create<T extends ExamAttemptCreateArgs>(args: SelectSubset<T, ExamAttemptCreateArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamAttempts.
     * @param {ExamAttemptCreateManyArgs} args - Arguments to create many ExamAttempts.
     * @example
     * // Create many ExamAttempts
     * const examAttempt = await prisma.examAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamAttemptCreateManyArgs>(args?: SelectSubset<T, ExamAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamAttempts and returns the data saved in the database.
     * @param {ExamAttemptCreateManyAndReturnArgs} args - Arguments to create many ExamAttempts.
     * @example
     * // Create many ExamAttempts
     * const examAttempt = await prisma.examAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamAttempts and only return the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamAttempt.
     * @param {ExamAttemptDeleteArgs} args - Arguments to delete one ExamAttempt.
     * @example
     * // Delete one ExamAttempt
     * const ExamAttempt = await prisma.examAttempt.delete({
     *   where: {
     *     // ... filter to delete one ExamAttempt
     *   }
     * })
     * 
     */
    delete<T extends ExamAttemptDeleteArgs>(args: SelectSubset<T, ExamAttemptDeleteArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamAttempt.
     * @param {ExamAttemptUpdateArgs} args - Arguments to update one ExamAttempt.
     * @example
     * // Update one ExamAttempt
     * const examAttempt = await prisma.examAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamAttemptUpdateArgs>(args: SelectSubset<T, ExamAttemptUpdateArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamAttempts.
     * @param {ExamAttemptDeleteManyArgs} args - Arguments to filter ExamAttempts to delete.
     * @example
     * // Delete a few ExamAttempts
     * const { count } = await prisma.examAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamAttemptDeleteManyArgs>(args?: SelectSubset<T, ExamAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamAttempts
     * const examAttempt = await prisma.examAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamAttemptUpdateManyArgs>(args: SelectSubset<T, ExamAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAttempts and returns the data updated in the database.
     * @param {ExamAttemptUpdateManyAndReturnArgs} args - Arguments to update many ExamAttempts.
     * @example
     * // Update many ExamAttempts
     * const examAttempt = await prisma.examAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamAttempts and only return the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamAttempt.
     * @param {ExamAttemptUpsertArgs} args - Arguments to update or create a ExamAttempt.
     * @example
     * // Update or create a ExamAttempt
     * const examAttempt = await prisma.examAttempt.upsert({
     *   create: {
     *     // ... data to create a ExamAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamAttempt we want to update
     *   }
     * })
     */
    upsert<T extends ExamAttemptUpsertArgs>(args: SelectSubset<T, ExamAttemptUpsertArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptCountArgs} args - Arguments to filter ExamAttempts to count.
     * @example
     * // Count the number of ExamAttempts
     * const count = await prisma.examAttempt.count({
     *   where: {
     *     // ... the filter for the ExamAttempts we want to count
     *   }
     * })
    **/
    count<T extends ExamAttemptCountArgs>(
      args?: Subset<T, ExamAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAttemptAggregateArgs>(args: Subset<T, ExamAttemptAggregateArgs>): Prisma.PrismaPromise<GetExamAttemptAggregateType<T>>

    /**
     * Group by ExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptGroupByArgs} args - Group by arguments.
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
      T extends ExamAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamAttemptGroupByArgs['orderBy'] }
        : { orderBy?: ExamAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamAttempt model
   */
  readonly fields: ExamAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends ExamAttempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, ExamAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExamAttempt model
   */
  interface ExamAttemptFieldRefs {
    readonly id: FieldRef<"ExamAttempt", 'String'>
    readonly exam_id: FieldRef<"ExamAttempt", 'String'>
    readonly student_name: FieldRef<"ExamAttempt", 'String'>
    readonly student_email: FieldRef<"ExamAttempt", 'String'>
    readonly started_at: FieldRef<"ExamAttempt", 'DateTime'>
    readonly submitted_at: FieldRef<"ExamAttempt", 'DateTime'>
    readonly score: FieldRef<"ExamAttempt", 'Float'>
    readonly passed: FieldRef<"ExamAttempt", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExamAttempt findUnique
   */
  export type ExamAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt findUniqueOrThrow
   */
  export type ExamAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt findFirst
   */
  export type ExamAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAttempts.
     */
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt findFirstOrThrow
   */
  export type ExamAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAttempts.
     */
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt findMany
   */
  export type ExamAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempts to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt create
   */
  export type ExamAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamAttempt.
     */
    data: XOR<ExamAttemptCreateInput, ExamAttemptUncheckedCreateInput>
  }

  /**
   * ExamAttempt createMany
   */
  export type ExamAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamAttempts.
     */
    data: ExamAttemptCreateManyInput | ExamAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamAttempt createManyAndReturn
   */
  export type ExamAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many ExamAttempts.
     */
    data: ExamAttemptCreateManyInput | ExamAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAttempt update
   */
  export type ExamAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamAttempt.
     */
    data: XOR<ExamAttemptUpdateInput, ExamAttemptUncheckedUpdateInput>
    /**
     * Choose, which ExamAttempt to update.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt updateMany
   */
  export type ExamAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamAttempts.
     */
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExamAttempts to update
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to update.
     */
    limit?: number
  }

  /**
   * ExamAttempt updateManyAndReturn
   */
  export type ExamAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * The data used to update ExamAttempts.
     */
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExamAttempts to update
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAttempt upsert
   */
  export type ExamAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamAttempt to update in case it exists.
     */
    where: ExamAttemptWhereUniqueInput
    /**
     * In case the ExamAttempt found by the `where` argument doesn't exist, create a new ExamAttempt with this data.
     */
    create: XOR<ExamAttemptCreateInput, ExamAttemptUncheckedCreateInput>
    /**
     * In case the ExamAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamAttemptUpdateInput, ExamAttemptUncheckedUpdateInput>
  }

  /**
   * ExamAttempt delete
   */
  export type ExamAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter which ExamAttempt to delete.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt deleteMany
   */
  export type ExamAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAttempts to delete
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to delete.
     */
    limit?: number
  }

  /**
   * ExamAttempt.answers
   */
  export type ExamAttempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    where?: AttemptAnswerWhereInput
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    cursor?: AttemptAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * ExamAttempt without action
   */
  export type ExamAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
  }


  /**
   * Model AttemptAnswer
   */

  export type AggregateAttemptAnswer = {
    _count: AttemptAnswerCountAggregateOutputType | null
    _avg: AttemptAnswerAvgAggregateOutputType | null
    _sum: AttemptAnswerSumAggregateOutputType | null
    _min: AttemptAnswerMinAggregateOutputType | null
    _max: AttemptAnswerMaxAggregateOutputType | null
  }

  export type AttemptAnswerAvgAggregateOutputType = {
    points_earned: number | null
  }

  export type AttemptAnswerSumAggregateOutputType = {
    points_earned: number | null
  }

  export type AttemptAnswerMinAggregateOutputType = {
    id: string | null
    attempt_id: string | null
    question_id: string | null
    answer: string | null
    is_correct: boolean | null
    points_earned: number | null
  }

  export type AttemptAnswerMaxAggregateOutputType = {
    id: string | null
    attempt_id: string | null
    question_id: string | null
    answer: string | null
    is_correct: boolean | null
    points_earned: number | null
  }

  export type AttemptAnswerCountAggregateOutputType = {
    id: number
    attempt_id: number
    question_id: number
    answer: number
    is_correct: number
    points_earned: number
    _all: number
  }


  export type AttemptAnswerAvgAggregateInputType = {
    points_earned?: true
  }

  export type AttemptAnswerSumAggregateInputType = {
    points_earned?: true
  }

  export type AttemptAnswerMinAggregateInputType = {
    id?: true
    attempt_id?: true
    question_id?: true
    answer?: true
    is_correct?: true
    points_earned?: true
  }

  export type AttemptAnswerMaxAggregateInputType = {
    id?: true
    attempt_id?: true
    question_id?: true
    answer?: true
    is_correct?: true
    points_earned?: true
  }

  export type AttemptAnswerCountAggregateInputType = {
    id?: true
    attempt_id?: true
    question_id?: true
    answer?: true
    is_correct?: true
    points_earned?: true
    _all?: true
  }

  export type AttemptAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttemptAnswer to aggregate.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttemptAnswers
    **/
    _count?: true | AttemptAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptAnswerMaxAggregateInputType
  }

  export type GetAttemptAnswerAggregateType<T extends AttemptAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAttemptAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttemptAnswer[P]>
      : GetScalarType<T[P], AggregateAttemptAnswer[P]>
  }




  export type AttemptAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptAnswerWhereInput
    orderBy?: AttemptAnswerOrderByWithAggregationInput | AttemptAnswerOrderByWithAggregationInput[]
    by: AttemptAnswerScalarFieldEnum[] | AttemptAnswerScalarFieldEnum
    having?: AttemptAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptAnswerCountAggregateInputType | true
    _avg?: AttemptAnswerAvgAggregateInputType
    _sum?: AttemptAnswerSumAggregateInputType
    _min?: AttemptAnswerMinAggregateInputType
    _max?: AttemptAnswerMaxAggregateInputType
  }

  export type AttemptAnswerGroupByOutputType = {
    id: string
    attempt_id: string
    question_id: string
    answer: string | null
    is_correct: boolean | null
    points_earned: number
    _count: AttemptAnswerCountAggregateOutputType | null
    _avg: AttemptAnswerAvgAggregateOutputType | null
    _sum: AttemptAnswerSumAggregateOutputType | null
    _min: AttemptAnswerMinAggregateOutputType | null
    _max: AttemptAnswerMaxAggregateOutputType | null
  }

  type GetAttemptAnswerGroupByPayload<T extends AttemptAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptAnswerGroupByOutputType[P]>
        }
      >
    >


  export type AttemptAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    answer?: boolean
    is_correct?: boolean
    points_earned?: boolean
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptAnswer"]>

  export type AttemptAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    answer?: boolean
    is_correct?: boolean
    points_earned?: boolean
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptAnswer"]>

  export type AttemptAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    answer?: boolean
    is_correct?: boolean
    points_earned?: boolean
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptAnswer"]>

  export type AttemptAnswerSelectScalar = {
    id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    answer?: boolean
    is_correct?: boolean
    points_earned?: boolean
  }

  export type AttemptAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attempt_id" | "question_id" | "answer" | "is_correct" | "points_earned", ExtArgs["result"]["attemptAnswer"]>
  export type AttemptAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AttemptAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AttemptAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AttemptAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttemptAnswer"
    objects: {
      attempt: Prisma.$ExamAttemptPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attempt_id: string
      question_id: string
      answer: string | null
      is_correct: boolean | null
      points_earned: number
    }, ExtArgs["result"]["attemptAnswer"]>
    composites: {}
  }

  type AttemptAnswerGetPayload<S extends boolean | null | undefined | AttemptAnswerDefaultArgs> = $Result.GetResult<Prisma.$AttemptAnswerPayload, S>

  type AttemptAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptAnswerCountAggregateInputType | true
    }

  export interface AttemptAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttemptAnswer'], meta: { name: 'AttemptAnswer' } }
    /**
     * Find zero or one AttemptAnswer that matches the filter.
     * @param {AttemptAnswerFindUniqueArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptAnswerFindUniqueArgs>(args: SelectSubset<T, AttemptAnswerFindUniqueArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttemptAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptAnswerFindUniqueOrThrowArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttemptAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerFindFirstArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptAnswerFindFirstArgs>(args?: SelectSubset<T, AttemptAnswerFindFirstArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttemptAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerFindFirstOrThrowArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttemptAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttemptAnswers
     * const attemptAnswers = await prisma.attemptAnswer.findMany()
     * 
     * // Get first 10 AttemptAnswers
     * const attemptAnswers = await prisma.attemptAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptAnswerWithIdOnly = await prisma.attemptAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptAnswerFindManyArgs>(args?: SelectSubset<T, AttemptAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttemptAnswer.
     * @param {AttemptAnswerCreateArgs} args - Arguments to create a AttemptAnswer.
     * @example
     * // Create one AttemptAnswer
     * const AttemptAnswer = await prisma.attemptAnswer.create({
     *   data: {
     *     // ... data to create a AttemptAnswer
     *   }
     * })
     * 
     */
    create<T extends AttemptAnswerCreateArgs>(args: SelectSubset<T, AttemptAnswerCreateArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttemptAnswers.
     * @param {AttemptAnswerCreateManyArgs} args - Arguments to create many AttemptAnswers.
     * @example
     * // Create many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptAnswerCreateManyArgs>(args?: SelectSubset<T, AttemptAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttemptAnswers and returns the data saved in the database.
     * @param {AttemptAnswerCreateManyAndReturnArgs} args - Arguments to create many AttemptAnswers.
     * @example
     * // Create many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttemptAnswers and only return the `id`
     * const attemptAnswerWithIdOnly = await prisma.attemptAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttemptAnswer.
     * @param {AttemptAnswerDeleteArgs} args - Arguments to delete one AttemptAnswer.
     * @example
     * // Delete one AttemptAnswer
     * const AttemptAnswer = await prisma.attemptAnswer.delete({
     *   where: {
     *     // ... filter to delete one AttemptAnswer
     *   }
     * })
     * 
     */
    delete<T extends AttemptAnswerDeleteArgs>(args: SelectSubset<T, AttemptAnswerDeleteArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttemptAnswer.
     * @param {AttemptAnswerUpdateArgs} args - Arguments to update one AttemptAnswer.
     * @example
     * // Update one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptAnswerUpdateArgs>(args: SelectSubset<T, AttemptAnswerUpdateArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttemptAnswers.
     * @param {AttemptAnswerDeleteManyArgs} args - Arguments to filter AttemptAnswers to delete.
     * @example
     * // Delete a few AttemptAnswers
     * const { count } = await prisma.attemptAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptAnswerDeleteManyArgs>(args?: SelectSubset<T, AttemptAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttemptAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptAnswerUpdateManyArgs>(args: SelectSubset<T, AttemptAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttemptAnswers and returns the data updated in the database.
     * @param {AttemptAnswerUpdateManyAndReturnArgs} args - Arguments to update many AttemptAnswers.
     * @example
     * // Update many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttemptAnswers and only return the `id`
     * const attemptAnswerWithIdOnly = await prisma.attemptAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttemptAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttemptAnswer.
     * @param {AttemptAnswerUpsertArgs} args - Arguments to update or create a AttemptAnswer.
     * @example
     * // Update or create a AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.upsert({
     *   create: {
     *     // ... data to create a AttemptAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttemptAnswer we want to update
     *   }
     * })
     */
    upsert<T extends AttemptAnswerUpsertArgs>(args: SelectSubset<T, AttemptAnswerUpsertArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttemptAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerCountArgs} args - Arguments to filter AttemptAnswers to count.
     * @example
     * // Count the number of AttemptAnswers
     * const count = await prisma.attemptAnswer.count({
     *   where: {
     *     // ... the filter for the AttemptAnswers we want to count
     *   }
     * })
    **/
    count<T extends AttemptAnswerCountArgs>(
      args?: Subset<T, AttemptAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttemptAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttemptAnswerAggregateArgs>(args: Subset<T, AttemptAnswerAggregateArgs>): Prisma.PrismaPromise<GetAttemptAnswerAggregateType<T>>

    /**
     * Group by AttemptAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerGroupByArgs} args - Group by arguments.
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
      T extends AttemptAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptAnswerGroupByArgs['orderBy'] }
        : { orderBy?: AttemptAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttemptAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttemptAnswer model
   */
  readonly fields: AttemptAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttemptAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends ExamAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamAttemptDefaultArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AttemptAnswer model
   */
  interface AttemptAnswerFieldRefs {
    readonly id: FieldRef<"AttemptAnswer", 'String'>
    readonly attempt_id: FieldRef<"AttemptAnswer", 'String'>
    readonly question_id: FieldRef<"AttemptAnswer", 'String'>
    readonly answer: FieldRef<"AttemptAnswer", 'String'>
    readonly is_correct: FieldRef<"AttemptAnswer", 'Boolean'>
    readonly points_earned: FieldRef<"AttemptAnswer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AttemptAnswer findUnique
   */
  export type AttemptAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer findUniqueOrThrow
   */
  export type AttemptAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer findFirst
   */
  export type AttemptAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttemptAnswers.
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptAnswers.
     */
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * AttemptAnswer findFirstOrThrow
   */
  export type AttemptAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttemptAnswers.
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptAnswers.
     */
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * AttemptAnswer findMany
   */
  export type AttemptAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswers to fetch.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttemptAnswers.
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * AttemptAnswer create
   */
  export type AttemptAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a AttemptAnswer.
     */
    data: XOR<AttemptAnswerCreateInput, AttemptAnswerUncheckedCreateInput>
  }

  /**
   * AttemptAnswer createMany
   */
  export type AttemptAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttemptAnswers.
     */
    data: AttemptAnswerCreateManyInput | AttemptAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttemptAnswer createManyAndReturn
   */
  export type AttemptAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many AttemptAnswers.
     */
    data: AttemptAnswerCreateManyInput | AttemptAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttemptAnswer update
   */
  export type AttemptAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a AttemptAnswer.
     */
    data: XOR<AttemptAnswerUpdateInput, AttemptAnswerUncheckedUpdateInput>
    /**
     * Choose, which AttemptAnswer to update.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer updateMany
   */
  export type AttemptAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttemptAnswers.
     */
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AttemptAnswers to update
     */
    where?: AttemptAnswerWhereInput
    /**
     * Limit how many AttemptAnswers to update.
     */
    limit?: number
  }

  /**
   * AttemptAnswer updateManyAndReturn
   */
  export type AttemptAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * The data used to update AttemptAnswers.
     */
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AttemptAnswers to update
     */
    where?: AttemptAnswerWhereInput
    /**
     * Limit how many AttemptAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttemptAnswer upsert
   */
  export type AttemptAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the AttemptAnswer to update in case it exists.
     */
    where: AttemptAnswerWhereUniqueInput
    /**
     * In case the AttemptAnswer found by the `where` argument doesn't exist, create a new AttemptAnswer with this data.
     */
    create: XOR<AttemptAnswerCreateInput, AttemptAnswerUncheckedCreateInput>
    /**
     * In case the AttemptAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptAnswerUpdateInput, AttemptAnswerUncheckedUpdateInput>
  }

  /**
   * AttemptAnswer delete
   */
  export type AttemptAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter which AttemptAnswer to delete.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer deleteMany
   */
  export type AttemptAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttemptAnswers to delete
     */
    where?: AttemptAnswerWhereInput
    /**
     * Limit how many AttemptAnswers to delete.
     */
    limit?: number
  }

  /**
   * AttemptAnswer without action
   */
  export type AttemptAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    userName: 'userName',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    schoolName: 'schoolName',
    schoolGrade: 'schoolGrade',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    schoolCode: 'schoolCode',
    schoolName: 'schoolName',
    schoolShortName: 'schoolShortName',
    schoolLogo: 'schoolLogo'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const VideoItemScalarFieldEnum: {
    id: 'id',
    category: 'category',
    thumbnail: 'thumbnail',
    title: 'title',
    duration: 'duration',
    instructor: 'instructor',
    views: 'views',
    videoUrl: 'videoUrl'
  };

  export type VideoItemScalarFieldEnum = (typeof VideoItemScalarFieldEnum)[keyof typeof VideoItemScalarFieldEnum]


  export const LeaderboardItemScalarFieldEnum: {
    id: 'id',
    rank: 'rank',
    init: 'init',
    name: 'name',
    type: 'type',
    points: 'points'
  };

  export type LeaderboardItemScalarFieldEnum = (typeof LeaderboardItemScalarFieldEnum)[keyof typeof LeaderboardItemScalarFieldEnum]


  export const DayActivityScalarFieldEnum: {
    id: 'id',
    day: 'day',
    active: 'active'
  };

  export type DayActivityScalarFieldEnum = (typeof DayActivityScalarFieldEnum)[keyof typeof DayActivityScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    time_limit_minutes: 'time_limit_minutes',
    passing_score: 'passing_score',
    is_published: 'is_published',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    exam_id: 'exam_id',
    content: 'content',
    question_type: 'question_type',
    options: 'options',
    correct_answer: 'correct_answer',
    explanation: 'explanation',
    points: 'points',
    order_index: 'order_index'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ExamAttemptScalarFieldEnum: {
    id: 'id',
    exam_id: 'exam_id',
    student_name: 'student_name',
    student_email: 'student_email',
    started_at: 'started_at',
    submitted_at: 'submitted_at',
    score: 'score',
    passed: 'passed'
  };

  export type ExamAttemptScalarFieldEnum = (typeof ExamAttemptScalarFieldEnum)[keyof typeof ExamAttemptScalarFieldEnum]


  export const AttemptAnswerScalarFieldEnum: {
    id: 'id',
    attempt_id: 'attempt_id',
    question_id: 'question_id',
    answer: 'answer',
    is_correct: 'is_correct',
    points_earned: 'points_earned'
  };

  export type AttemptAnswerScalarFieldEnum = (typeof AttemptAnswerScalarFieldEnum)[keyof typeof AttemptAnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean[]'
   */
  export type ListBooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    schoolName?: StringFilter<"User"> | string
    schoolGrade?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    schoolName?: SortOrder
    schoolGrade?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    schoolName?: StringFilter<"User"> | string
    schoolGrade?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    schoolName?: SortOrder
    schoolGrade?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    schoolName?: StringWithAggregatesFilter<"User"> | string
    schoolGrade?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    schoolCode?: StringFilter<"School"> | string
    schoolName?: StringFilter<"School"> | string
    schoolShortName?: StringFilter<"School"> | string
    schoolLogo?: StringNullableFilter<"School"> | string | null
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    schoolCode?: SortOrder
    schoolName?: SortOrder
    schoolShortName?: SortOrder
    schoolLogo?: SortOrderInput | SortOrder
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    schoolCode?: StringFilter<"School"> | string
    schoolName?: StringFilter<"School"> | string
    schoolShortName?: StringFilter<"School"> | string
    schoolLogo?: StringNullableFilter<"School"> | string | null
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    schoolCode?: SortOrder
    schoolName?: SortOrder
    schoolShortName?: SortOrder
    schoolLogo?: SortOrderInput | SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    schoolCode?: StringWithAggregatesFilter<"School"> | string
    schoolName?: StringWithAggregatesFilter<"School"> | string
    schoolShortName?: StringWithAggregatesFilter<"School"> | string
    schoolLogo?: StringNullableWithAggregatesFilter<"School"> | string | null
  }

  export type VideoItemWhereInput = {
    AND?: VideoItemWhereInput | VideoItemWhereInput[]
    OR?: VideoItemWhereInput[]
    NOT?: VideoItemWhereInput | VideoItemWhereInput[]
    id?: IntFilter<"VideoItem"> | number
    category?: StringFilter<"VideoItem"> | string
    thumbnail?: StringFilter<"VideoItem"> | string
    title?: StringFilter<"VideoItem"> | string
    duration?: StringFilter<"VideoItem"> | string
    instructor?: StringFilter<"VideoItem"> | string
    views?: StringFilter<"VideoItem"> | string
    videoUrl?: StringNullableFilter<"VideoItem"> | string | null
  }

  export type VideoItemOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    views?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
  }

  export type VideoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoItemWhereInput | VideoItemWhereInput[]
    OR?: VideoItemWhereInput[]
    NOT?: VideoItemWhereInput | VideoItemWhereInput[]
    category?: StringFilter<"VideoItem"> | string
    thumbnail?: StringFilter<"VideoItem"> | string
    title?: StringFilter<"VideoItem"> | string
    duration?: StringFilter<"VideoItem"> | string
    instructor?: StringFilter<"VideoItem"> | string
    views?: StringFilter<"VideoItem"> | string
    videoUrl?: StringNullableFilter<"VideoItem"> | string | null
  }, "id">

  export type VideoItemOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    views?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    _count?: VideoItemCountOrderByAggregateInput
    _avg?: VideoItemAvgOrderByAggregateInput
    _max?: VideoItemMaxOrderByAggregateInput
    _min?: VideoItemMinOrderByAggregateInput
    _sum?: VideoItemSumOrderByAggregateInput
  }

  export type VideoItemScalarWhereWithAggregatesInput = {
    AND?: VideoItemScalarWhereWithAggregatesInput | VideoItemScalarWhereWithAggregatesInput[]
    OR?: VideoItemScalarWhereWithAggregatesInput[]
    NOT?: VideoItemScalarWhereWithAggregatesInput | VideoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VideoItem"> | number
    category?: StringWithAggregatesFilter<"VideoItem"> | string
    thumbnail?: StringWithAggregatesFilter<"VideoItem"> | string
    title?: StringWithAggregatesFilter<"VideoItem"> | string
    duration?: StringWithAggregatesFilter<"VideoItem"> | string
    instructor?: StringWithAggregatesFilter<"VideoItem"> | string
    views?: StringWithAggregatesFilter<"VideoItem"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"VideoItem"> | string | null
  }

  export type LeaderboardItemWhereInput = {
    AND?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[]
    OR?: LeaderboardItemWhereInput[]
    NOT?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[]
    id?: IntFilter<"LeaderboardItem"> | number
    rank?: IntFilter<"LeaderboardItem"> | number
    init?: StringFilter<"LeaderboardItem"> | string
    name?: StringFilter<"LeaderboardItem"> | string
    type?: StringFilter<"LeaderboardItem"> | string
    points?: StringFilter<"LeaderboardItem"> | string
  }

  export type LeaderboardItemOrderByWithRelationInput = {
    id?: SortOrder
    rank?: SortOrder
    init?: SortOrder
    name?: SortOrder
    type?: SortOrder
    points?: SortOrder
  }

  export type LeaderboardItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[]
    OR?: LeaderboardItemWhereInput[]
    NOT?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[]
    rank?: IntFilter<"LeaderboardItem"> | number
    init?: StringFilter<"LeaderboardItem"> | string
    name?: StringFilter<"LeaderboardItem"> | string
    type?: StringFilter<"LeaderboardItem"> | string
    points?: StringFilter<"LeaderboardItem"> | string
  }, "id">

  export type LeaderboardItemOrderByWithAggregationInput = {
    id?: SortOrder
    rank?: SortOrder
    init?: SortOrder
    name?: SortOrder
    type?: SortOrder
    points?: SortOrder
    _count?: LeaderboardItemCountOrderByAggregateInput
    _avg?: LeaderboardItemAvgOrderByAggregateInput
    _max?: LeaderboardItemMaxOrderByAggregateInput
    _min?: LeaderboardItemMinOrderByAggregateInput
    _sum?: LeaderboardItemSumOrderByAggregateInput
  }

  export type LeaderboardItemScalarWhereWithAggregatesInput = {
    AND?: LeaderboardItemScalarWhereWithAggregatesInput | LeaderboardItemScalarWhereWithAggregatesInput[]
    OR?: LeaderboardItemScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardItemScalarWhereWithAggregatesInput | LeaderboardItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeaderboardItem"> | number
    rank?: IntWithAggregatesFilter<"LeaderboardItem"> | number
    init?: StringWithAggregatesFilter<"LeaderboardItem"> | string
    name?: StringWithAggregatesFilter<"LeaderboardItem"> | string
    type?: StringWithAggregatesFilter<"LeaderboardItem"> | string
    points?: StringWithAggregatesFilter<"LeaderboardItem"> | string
  }

  export type DayActivityWhereInput = {
    AND?: DayActivityWhereInput | DayActivityWhereInput[]
    OR?: DayActivityWhereInput[]
    NOT?: DayActivityWhereInput | DayActivityWhereInput[]
    id?: IntFilter<"DayActivity"> | number
    day?: StringFilter<"DayActivity"> | string
    active?: BoolNullableListFilter<"DayActivity">
  }

  export type DayActivityOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    active?: SortOrder
  }

  export type DayActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DayActivityWhereInput | DayActivityWhereInput[]
    OR?: DayActivityWhereInput[]
    NOT?: DayActivityWhereInput | DayActivityWhereInput[]
    day?: StringFilter<"DayActivity"> | string
    active?: BoolNullableListFilter<"DayActivity">
  }, "id">

  export type DayActivityOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    active?: SortOrder
    _count?: DayActivityCountOrderByAggregateInput
    _avg?: DayActivityAvgOrderByAggregateInput
    _max?: DayActivityMaxOrderByAggregateInput
    _min?: DayActivityMinOrderByAggregateInput
    _sum?: DayActivitySumOrderByAggregateInput
  }

  export type DayActivityScalarWhereWithAggregatesInput = {
    AND?: DayActivityScalarWhereWithAggregatesInput | DayActivityScalarWhereWithAggregatesInput[]
    OR?: DayActivityScalarWhereWithAggregatesInput[]
    NOT?: DayActivityScalarWhereWithAggregatesInput | DayActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DayActivity"> | number
    day?: StringWithAggregatesFilter<"DayActivity"> | string
    active?: BoolNullableListFilter<"DayActivity">
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringNullableFilter<"Exam"> | string | null
    time_limit_minutes?: IntNullableFilter<"Exam"> | number | null
    passing_score?: IntFilter<"Exam"> | number
    is_published?: BoolFilter<"Exam"> | boolean
    created_at?: DateTimeFilter<"Exam"> | Date | string
    updated_at?: DateTimeFilter<"Exam"> | Date | string
    questions?: QuestionListRelationFilter
    attempts?: ExamAttemptListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time_limit_minutes?: SortOrderInput | SortOrder
    passing_score?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    attempts?: ExamAttemptOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    description?: StringNullableFilter<"Exam"> | string | null
    time_limit_minutes?: IntNullableFilter<"Exam"> | number | null
    passing_score?: IntFilter<"Exam"> | number
    is_published?: BoolFilter<"Exam"> | boolean
    created_at?: DateTimeFilter<"Exam"> | Date | string
    updated_at?: DateTimeFilter<"Exam"> | Date | string
    questions?: QuestionListRelationFilter
    attempts?: ExamAttemptListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time_limit_minutes?: SortOrderInput | SortOrder
    passing_score?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    description?: StringNullableWithAggregatesFilter<"Exam"> | string | null
    time_limit_minutes?: IntNullableWithAggregatesFilter<"Exam"> | number | null
    passing_score?: IntWithAggregatesFilter<"Exam"> | number
    is_published?: BoolWithAggregatesFilter<"Exam"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    exam_id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    question_type?: StringFilter<"Question"> | string
    options?: JsonNullableFilter<"Question">
    correct_answer?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    points?: IntFilter<"Question"> | number
    order_index?: IntFilter<"Question"> | number
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AttemptAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    content?: SortOrder
    question_type?: SortOrder
    options?: SortOrderInput | SortOrder
    correct_answer?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    points?: SortOrder
    order_index?: SortOrder
    exam?: ExamOrderByWithRelationInput
    answers?: AttemptAnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    exam_id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    question_type?: StringFilter<"Question"> | string
    options?: JsonNullableFilter<"Question">
    correct_answer?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    points?: IntFilter<"Question"> | number
    order_index?: IntFilter<"Question"> | number
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AttemptAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    content?: SortOrder
    question_type?: SortOrder
    options?: SortOrderInput | SortOrder
    correct_answer?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    points?: SortOrder
    order_index?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    exam_id?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    question_type?: StringWithAggregatesFilter<"Question"> | string
    options?: JsonNullableWithAggregatesFilter<"Question">
    correct_answer?: StringNullableWithAggregatesFilter<"Question"> | string | null
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    points?: IntWithAggregatesFilter<"Question"> | number
    order_index?: IntWithAggregatesFilter<"Question"> | number
  }

  export type ExamAttemptWhereInput = {
    AND?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    OR?: ExamAttemptWhereInput[]
    NOT?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    id?: StringFilter<"ExamAttempt"> | string
    exam_id?: StringFilter<"ExamAttempt"> | string
    student_name?: StringFilter<"ExamAttempt"> | string
    student_email?: StringFilter<"ExamAttempt"> | string
    started_at?: DateTimeFilter<"ExamAttempt"> | Date | string
    submitted_at?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    score?: FloatNullableFilter<"ExamAttempt"> | number | null
    passed?: BoolNullableFilter<"ExamAttempt"> | boolean | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AttemptAnswerListRelationFilter
  }

  export type ExamAttemptOrderByWithRelationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_name?: SortOrder
    student_email?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    passed?: SortOrderInput | SortOrder
    exam?: ExamOrderByWithRelationInput
    answers?: AttemptAnswerOrderByRelationAggregateInput
  }

  export type ExamAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    OR?: ExamAttemptWhereInput[]
    NOT?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    exam_id?: StringFilter<"ExamAttempt"> | string
    student_name?: StringFilter<"ExamAttempt"> | string
    student_email?: StringFilter<"ExamAttempt"> | string
    started_at?: DateTimeFilter<"ExamAttempt"> | Date | string
    submitted_at?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    score?: FloatNullableFilter<"ExamAttempt"> | number | null
    passed?: BoolNullableFilter<"ExamAttempt"> | boolean | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AttemptAnswerListRelationFilter
  }, "id">

  export type ExamAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_name?: SortOrder
    student_email?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    passed?: SortOrderInput | SortOrder
    _count?: ExamAttemptCountOrderByAggregateInput
    _avg?: ExamAttemptAvgOrderByAggregateInput
    _max?: ExamAttemptMaxOrderByAggregateInput
    _min?: ExamAttemptMinOrderByAggregateInput
    _sum?: ExamAttemptSumOrderByAggregateInput
  }

  export type ExamAttemptScalarWhereWithAggregatesInput = {
    AND?: ExamAttemptScalarWhereWithAggregatesInput | ExamAttemptScalarWhereWithAggregatesInput[]
    OR?: ExamAttemptScalarWhereWithAggregatesInput[]
    NOT?: ExamAttemptScalarWhereWithAggregatesInput | ExamAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamAttempt"> | string
    exam_id?: StringWithAggregatesFilter<"ExamAttempt"> | string
    student_name?: StringWithAggregatesFilter<"ExamAttempt"> | string
    student_email?: StringWithAggregatesFilter<"ExamAttempt"> | string
    started_at?: DateTimeWithAggregatesFilter<"ExamAttempt"> | Date | string
    submitted_at?: DateTimeNullableWithAggregatesFilter<"ExamAttempt"> | Date | string | null
    score?: FloatNullableWithAggregatesFilter<"ExamAttempt"> | number | null
    passed?: BoolNullableWithAggregatesFilter<"ExamAttempt"> | boolean | null
  }

  export type AttemptAnswerWhereInput = {
    AND?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    OR?: AttemptAnswerWhereInput[]
    NOT?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    id?: StringFilter<"AttemptAnswer"> | string
    attempt_id?: StringFilter<"AttemptAnswer"> | string
    question_id?: StringFilter<"AttemptAnswer"> | string
    answer?: StringNullableFilter<"AttemptAnswer"> | string | null
    is_correct?: BoolNullableFilter<"AttemptAnswer"> | boolean | null
    points_earned?: IntFilter<"AttemptAnswer"> | number
    attempt?: XOR<ExamAttemptScalarRelationFilter, ExamAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AttemptAnswerOrderByWithRelationInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrderInput | SortOrder
    is_correct?: SortOrderInput | SortOrder
    points_earned?: SortOrder
    attempt?: ExamAttemptOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type AttemptAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    OR?: AttemptAnswerWhereInput[]
    NOT?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    attempt_id?: StringFilter<"AttemptAnswer"> | string
    question_id?: StringFilter<"AttemptAnswer"> | string
    answer?: StringNullableFilter<"AttemptAnswer"> | string | null
    is_correct?: BoolNullableFilter<"AttemptAnswer"> | boolean | null
    points_earned?: IntFilter<"AttemptAnswer"> | number
    attempt?: XOR<ExamAttemptScalarRelationFilter, ExamAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AttemptAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrderInput | SortOrder
    is_correct?: SortOrderInput | SortOrder
    points_earned?: SortOrder
    _count?: AttemptAnswerCountOrderByAggregateInput
    _avg?: AttemptAnswerAvgOrderByAggregateInput
    _max?: AttemptAnswerMaxOrderByAggregateInput
    _min?: AttemptAnswerMinOrderByAggregateInput
    _sum?: AttemptAnswerSumOrderByAggregateInput
  }

  export type AttemptAnswerScalarWhereWithAggregatesInput = {
    AND?: AttemptAnswerScalarWhereWithAggregatesInput | AttemptAnswerScalarWhereWithAggregatesInput[]
    OR?: AttemptAnswerScalarWhereWithAggregatesInput[]
    NOT?: AttemptAnswerScalarWhereWithAggregatesInput | AttemptAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttemptAnswer"> | string
    attempt_id?: StringWithAggregatesFilter<"AttemptAnswer"> | string
    question_id?: StringWithAggregatesFilter<"AttemptAnswer"> | string
    answer?: StringNullableWithAggregatesFilter<"AttemptAnswer"> | string | null
    is_correct?: BoolNullableWithAggregatesFilter<"AttemptAnswer"> | boolean | null
    points_earned?: IntWithAggregatesFilter<"AttemptAnswer"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    userName: string
    fullName: string
    phoneNumber: string
    schoolName: string
    schoolGrade: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    userName: string
    fullName: string
    phoneNumber: string
    schoolName: string
    schoolGrade: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolGrade?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolGrade?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    userName: string
    fullName: string
    phoneNumber: string
    schoolName: string
    schoolGrade: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolGrade?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolGrade?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    schoolCode: string
    schoolName: string
    schoolShortName: string
    schoolLogo?: string | null
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    schoolCode: string
    schoolName: string
    schoolShortName: string
    schoolLogo?: string | null
  }

  export type SchoolUpdateInput = {
    schoolCode?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolShortName?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolCode?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolShortName?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolCreateManyInput = {
    id?: number
    schoolCode: string
    schoolName: string
    schoolShortName: string
    schoolLogo?: string | null
  }

  export type SchoolUpdateManyMutationInput = {
    schoolCode?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolShortName?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolCode?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolShortName?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoItemCreateInput = {
    category: string
    thumbnail: string
    title: string
    duration: string
    instructor: string
    views: string
    videoUrl?: string | null
  }

  export type VideoItemUncheckedCreateInput = {
    id?: number
    category: string
    thumbnail: string
    title: string
    duration: string
    instructor: string
    views: string
    videoUrl?: string | null
  }

  export type VideoItemUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    views?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    views?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoItemCreateManyInput = {
    id?: number
    category: string
    thumbnail: string
    title: string
    duration: string
    instructor: string
    views: string
    videoUrl?: string | null
  }

  export type VideoItemUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    views?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    views?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaderboardItemCreateInput = {
    rank: number
    init: string
    name: string
    type: string
    points: string
  }

  export type LeaderboardItemUncheckedCreateInput = {
    id?: number
    rank: number
    init: string
    name: string
    type: string
    points: string
  }

  export type LeaderboardItemUpdateInput = {
    rank?: IntFieldUpdateOperationsInput | number
    init?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    points?: StringFieldUpdateOperationsInput | string
  }

  export type LeaderboardItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    init?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    points?: StringFieldUpdateOperationsInput | string
  }

  export type LeaderboardItemCreateManyInput = {
    id?: number
    rank: number
    init: string
    name: string
    type: string
    points: string
  }

  export type LeaderboardItemUpdateManyMutationInput = {
    rank?: IntFieldUpdateOperationsInput | number
    init?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    points?: StringFieldUpdateOperationsInput | string
  }

  export type LeaderboardItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    init?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    points?: StringFieldUpdateOperationsInput | string
  }

  export type DayActivityCreateInput = {
    day: string
    active?: DayActivityCreateactiveInput | boolean[]
  }

  export type DayActivityUncheckedCreateInput = {
    id?: number
    day: string
    active?: DayActivityCreateactiveInput | boolean[]
  }

  export type DayActivityUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    active?: DayActivityUpdateactiveInput | boolean[]
  }

  export type DayActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    active?: DayActivityUpdateactiveInput | boolean[]
  }

  export type DayActivityCreateManyInput = {
    id?: number
    day: string
    active?: DayActivityCreateactiveInput | boolean[]
  }

  export type DayActivityUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    active?: DayActivityUpdateactiveInput | boolean[]
  }

  export type DayActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    active?: DayActivityUpdateactiveInput | boolean[]
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionCreateNestedManyWithoutExamInput
    attempts?: ExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    attempts?: ExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutExamNestedInput
    attempts?: ExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    attempts?: ExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
    exam: ExamCreateNestedOneWithoutQuestionsInput
    answers?: AttemptAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    exam_id: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
    answers?: AttemptAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AttemptAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    answers?: AttemptAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    exam_id: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
  }

  export type ExamAttemptCreateInput = {
    id?: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
    exam: ExamCreateNestedOneWithoutAttemptsInput
    answers?: AttemptAnswerCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUncheckedCreateInput = {
    id?: string
    exam_id: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
    answers?: AttemptAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    exam?: ExamUpdateOneRequiredWithoutAttemptsNestedInput
    answers?: AttemptAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answers?: AttemptAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptCreateManyInput = {
    id?: string
    exam_id: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
  }

  export type ExamAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ExamAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AttemptAnswerCreateInput = {
    id?: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
    attempt: ExamAttemptCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AttemptAnswerUncheckedCreateInput = {
    id?: string
    attempt_id: string
    question_id: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
  }

  export type AttemptAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
    attempt?: ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AttemptAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptAnswerCreateManyInput = {
    id?: string
    attempt_id: string
    question_id: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
  }

  export type AttemptAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    schoolName?: SortOrder
    schoolGrade?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    schoolName?: SortOrder
    schoolGrade?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    schoolName?: SortOrder
    schoolGrade?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    schoolCode?: SortOrder
    schoolName?: SortOrder
    schoolShortName?: SortOrder
    schoolLogo?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolCode?: SortOrder
    schoolName?: SortOrder
    schoolShortName?: SortOrder
    schoolLogo?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    schoolCode?: SortOrder
    schoolName?: SortOrder
    schoolShortName?: SortOrder
    schoolLogo?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VideoItemCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    views?: SortOrder
    videoUrl?: SortOrder
  }

  export type VideoItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    views?: SortOrder
    videoUrl?: SortOrder
  }

  export type VideoItemMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    views?: SortOrder
    videoUrl?: SortOrder
  }

  export type VideoItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LeaderboardItemCountOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    init?: SortOrder
    name?: SortOrder
    type?: SortOrder
    points?: SortOrder
  }

  export type LeaderboardItemAvgOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
  }

  export type LeaderboardItemMaxOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    init?: SortOrder
    name?: SortOrder
    type?: SortOrder
    points?: SortOrder
  }

  export type LeaderboardItemMinOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    init?: SortOrder
    name?: SortOrder
    type?: SortOrder
    points?: SortOrder
  }

  export type LeaderboardItemSumOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
  }

  export type BoolNullableListFilter<$PrismaModel = never> = {
    equals?: boolean[] | ListBooleanFieldRefInput<$PrismaModel> | null
    has?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    hasEvery?: boolean[] | ListBooleanFieldRefInput<$PrismaModel>
    hasSome?: boolean[] | ListBooleanFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DayActivityCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    active?: SortOrder
  }

  export type DayActivityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DayActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
  }

  export type DayActivityMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
  }

  export type DayActivitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type ExamAttemptListRelationFilter = {
    every?: ExamAttemptWhereInput
    some?: ExamAttemptWhereInput
    none?: ExamAttemptWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time_limit_minutes?: SortOrder
    passing_score?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    time_limit_minutes?: SortOrder
    passing_score?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time_limit_minutes?: SortOrder
    passing_score?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time_limit_minutes?: SortOrder
    passing_score?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    time_limit_minutes?: SortOrder
    passing_score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type AttemptAnswerListRelationFilter = {
    every?: AttemptAnswerWhereInput
    some?: AttemptAnswerWhereInput
    none?: AttemptAnswerWhereInput
  }

  export type AttemptAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    content?: SortOrder
    question_type?: SortOrder
    options?: SortOrder
    correct_answer?: SortOrder
    explanation?: SortOrder
    points?: SortOrder
    order_index?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    points?: SortOrder
    order_index?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    content?: SortOrder
    question_type?: SortOrder
    correct_answer?: SortOrder
    explanation?: SortOrder
    points?: SortOrder
    order_index?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    content?: SortOrder
    question_type?: SortOrder
    correct_answer?: SortOrder
    explanation?: SortOrder
    points?: SortOrder
    order_index?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    points?: SortOrder
    order_index?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ExamAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_name?: SortOrder
    student_email?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrder
    score?: SortOrder
    passed?: SortOrder
  }

  export type ExamAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ExamAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_name?: SortOrder
    student_email?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrder
    score?: SortOrder
    passed?: SortOrder
  }

  export type ExamAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_name?: SortOrder
    student_email?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrder
    score?: SortOrder
    passed?: SortOrder
  }

  export type ExamAttemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ExamAttemptScalarRelationFilter = {
    is?: ExamAttemptWhereInput
    isNot?: ExamAttemptWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AttemptAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
  }

  export type AttemptAnswerAvgOrderByAggregateInput = {
    points_earned?: SortOrder
  }

  export type AttemptAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
  }

  export type AttemptAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
  }

  export type AttemptAnswerSumOrderByAggregateInput = {
    points_earned?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DayActivityCreateactiveInput = {
    set: boolean[]
  }

  export type DayActivityUpdateactiveInput = {
    set?: boolean[]
    push?: boolean | boolean[]
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ExamAttemptCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ExamAttemptUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ExamAttemptUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutExamInput | ExamAttemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutExamInput | ExamAttemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutExamInput | ExamAttemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ExamAttemptUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutExamInput | ExamAttemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutExamInput | ExamAttemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutExamInput | ExamAttemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type AttemptAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type AttemptAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type AttemptAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutQuestionInput | AttemptAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutQuestionInput | AttemptAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type ExamCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutAttemptsInput
    connect?: ExamWhereUniqueInput
  }

  export type AttemptAnswerCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type AttemptAnswerUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ExamUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutAttemptsInput
    upsert?: ExamUpsertWithoutAttemptsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutAttemptsInput, ExamUpdateWithoutAttemptsInput>, ExamUncheckedUpdateWithoutAttemptsInput>
  }

  export type AttemptAnswerUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutAttemptInput | AttemptAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutAttemptInput | AttemptAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type ExamAttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutAnswersInput
    connect?: ExamAttemptWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutAnswersInput
    upsert?: ExamAttemptUpsertWithoutAnswersInput
    connect?: ExamAttemptWhereUniqueInput
    update?: XOR<XOR<ExamAttemptUpdateToOneWithWhereWithoutAnswersInput, ExamAttemptUpdateWithoutAnswersInput>, ExamAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type QuestionCreateWithoutExamInput = {
    id?: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
    answers?: AttemptAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id?: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
    answers?: AttemptAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: QuestionCreateManyExamInput | QuestionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamAttemptCreateWithoutExamInput = {
    id?: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
    answers?: AttemptAnswerCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUncheckedCreateWithoutExamInput = {
    id?: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
    answers?: AttemptAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptCreateOrConnectWithoutExamInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput>
  }

  export type ExamAttemptCreateManyExamInputEnvelope = {
    data: ExamAttemptCreateManyExamInput | ExamAttemptCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    exam_id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    question_type?: StringFilter<"Question"> | string
    options?: JsonNullableFilter<"Question">
    correct_answer?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    points?: IntFilter<"Question"> | number
    order_index?: IntFilter<"Question"> | number
  }

  export type ExamAttemptUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamAttemptWhereUniqueInput
    update: XOR<ExamAttemptUpdateWithoutExamInput, ExamAttemptUncheckedUpdateWithoutExamInput>
    create: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput>
  }

  export type ExamAttemptUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamAttemptWhereUniqueInput
    data: XOR<ExamAttemptUpdateWithoutExamInput, ExamAttemptUncheckedUpdateWithoutExamInput>
  }

  export type ExamAttemptUpdateManyWithWhereWithoutExamInput = {
    where: ExamAttemptScalarWhereInput
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamAttemptScalarWhereInput = {
    AND?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
    OR?: ExamAttemptScalarWhereInput[]
    NOT?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
    id?: StringFilter<"ExamAttempt"> | string
    exam_id?: StringFilter<"ExamAttempt"> | string
    student_name?: StringFilter<"ExamAttempt"> | string
    student_email?: StringFilter<"ExamAttempt"> | string
    started_at?: DateTimeFilter<"ExamAttempt"> | Date | string
    submitted_at?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    score?: FloatNullableFilter<"ExamAttempt"> | number | null
    passed?: BoolNullableFilter<"ExamAttempt"> | boolean | null
  }

  export type ExamCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    attempts?: ExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    attempts?: ExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type AttemptAnswerCreateWithoutQuestionInput = {
    id?: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
    attempt: ExamAttemptCreateNestedOneWithoutAnswersInput
  }

  export type AttemptAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    attempt_id: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
  }

  export type AttemptAnswerCreateOrConnectWithoutQuestionInput = {
    where: AttemptAnswerWhereUniqueInput
    create: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AttemptAnswerCreateManyQuestionInputEnvelope = {
    data: AttemptAnswerCreateManyQuestionInput | AttemptAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: ExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: ExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AttemptAnswerWhereUniqueInput
    update: XOR<AttemptAnswerUpdateWithoutQuestionInput, AttemptAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AttemptAnswerWhereUniqueInput
    data: XOR<AttemptAnswerUpdateWithoutQuestionInput, AttemptAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AttemptAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AttemptAnswerScalarWhereInput
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AttemptAnswerScalarWhereInput = {
    AND?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
    OR?: AttemptAnswerScalarWhereInput[]
    NOT?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
    id?: StringFilter<"AttemptAnswer"> | string
    attempt_id?: StringFilter<"AttemptAnswer"> | string
    question_id?: StringFilter<"AttemptAnswer"> | string
    answer?: StringNullableFilter<"AttemptAnswer"> | string | null
    is_correct?: BoolNullableFilter<"AttemptAnswer"> | boolean | null
    points_earned?: IntFilter<"AttemptAnswer"> | number
  }

  export type ExamCreateWithoutAttemptsInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutAttemptsInput = {
    id?: string
    title: string
    description?: string | null
    time_limit_minutes?: number | null
    passing_score?: number
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutAttemptsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
  }

  export type AttemptAnswerCreateWithoutAttemptInput = {
    id?: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AttemptAnswerUncheckedCreateWithoutAttemptInput = {
    id?: string
    question_id: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
  }

  export type AttemptAnswerCreateOrConnectWithoutAttemptInput = {
    where: AttemptAnswerWhereUniqueInput
    create: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AttemptAnswerCreateManyAttemptInputEnvelope = {
    data: AttemptAnswerCreateManyAttemptInput | AttemptAnswerCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutAttemptsInput = {
    update: XOR<ExamUpdateWithoutAttemptsInput, ExamUncheckedUpdateWithoutAttemptsInput>
    create: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutAttemptsInput, ExamUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExamUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_limit_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    passing_score?: IntFieldUpdateOperationsInput | number
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput = {
    where: AttemptAnswerWhereUniqueInput
    update: XOR<AttemptAnswerUpdateWithoutAttemptInput, AttemptAnswerUncheckedUpdateWithoutAttemptInput>
    create: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput = {
    where: AttemptAnswerWhereUniqueInput
    data: XOR<AttemptAnswerUpdateWithoutAttemptInput, AttemptAnswerUncheckedUpdateWithoutAttemptInput>
  }

  export type AttemptAnswerUpdateManyWithWhereWithoutAttemptInput = {
    where: AttemptAnswerScalarWhereInput
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyWithoutAttemptInput>
  }

  export type ExamAttemptCreateWithoutAnswersInput = {
    id?: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
    exam: ExamCreateNestedOneWithoutAttemptsInput
  }

  export type ExamAttemptUncheckedCreateWithoutAnswersInput = {
    id?: string
    exam_id: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
  }

  export type ExamAttemptCreateOrConnectWithoutAnswersInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    exam_id: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type ExamAttemptUpsertWithoutAnswersInput = {
    update: XOR<ExamAttemptUpdateWithoutAnswersInput, ExamAttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
    where?: ExamAttemptWhereInput
  }

  export type ExamAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: ExamAttemptWhereInput
    data: XOR<ExamAttemptUpdateWithoutAnswersInput, ExamAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type ExamAttemptUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    exam?: ExamUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateManyExamInput = {
    id?: string
    content: string
    question_type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: string | null
    explanation?: string | null
    points?: number
    order_index?: number
  }

  export type ExamAttemptCreateManyExamInput = {
    id?: string
    student_name: string
    student_email: string
    started_at?: Date | string
    submitted_at?: Date | string | null
    score?: number | null
    passed?: boolean | null
  }

  export type QuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    answers?: AttemptAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    answers?: AttemptAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correct_answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
  }

  export type ExamAttemptUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answers?: AttemptAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answers?: AttemptAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_email?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AttemptAnswerCreateManyQuestionInput = {
    id?: string
    attempt_id: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
  }

  export type AttemptAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
    attempt?: ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AttemptAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptAnswerCreateManyAttemptInput = {
    id?: string
    question_id: string
    answer?: string | null
    is_correct?: boolean | null
    points_earned?: number
  }

  export type AttemptAnswerUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AttemptAnswerUncheckedUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    points_earned?: IntFieldUpdateOperationsInput | number
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