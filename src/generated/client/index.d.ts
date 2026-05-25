/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model VideoItem
 *
 */
export type VideoItem = $Result.DefaultSelection<Prisma.$VideoItemPayload>;
/**
 * Model LeaderboardItem
 *
 */
export type LeaderboardItem =
  $Result.DefaultSelection<Prisma.$LeaderboardItemPayload>;
/**
 * Model DayActivity
 *
 */
export type DayActivity = $Result.DefaultSelection<Prisma.$DayActivityPayload>;

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
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

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
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    VideoItem: 'VideoItem';
    LeaderboardItem: 'LeaderboardItem';
    DayActivity: 'DayActivity';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'videoItem' | 'leaderboardItem' | 'dayActivity';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      VideoItem: {
        payload: Prisma.$VideoItemPayload<ExtArgs>;
        fields: Prisma.VideoItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VideoItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VideoItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>;
          };
          findFirst: {
            args: Prisma.VideoItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VideoItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>;
          };
          findMany: {
            args: Prisma.VideoItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>[];
          };
          create: {
            args: Prisma.VideoItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>;
          };
          createMany: {
            args: Prisma.VideoItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.VideoItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>[];
          };
          delete: {
            args: Prisma.VideoItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>;
          };
          update: {
            args: Prisma.VideoItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>;
          };
          deleteMany: {
            args: Prisma.VideoItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VideoItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.VideoItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>[];
          };
          upsert: {
            args: Prisma.VideoItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VideoItemPayload>;
          };
          aggregate: {
            args: Prisma.VideoItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVideoItem>;
          };
          groupBy: {
            args: Prisma.VideoItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VideoItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.VideoItemCountArgs<ExtArgs>;
            result: $Utils.Optional<VideoItemCountAggregateOutputType> | number;
          };
        };
      };
      LeaderboardItem: {
        payload: Prisma.$LeaderboardItemPayload<ExtArgs>;
        fields: Prisma.LeaderboardItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LeaderboardItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LeaderboardItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>;
          };
          findFirst: {
            args: Prisma.LeaderboardItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LeaderboardItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>;
          };
          findMany: {
            args: Prisma.LeaderboardItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>[];
          };
          create: {
            args: Prisma.LeaderboardItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>;
          };
          createMany: {
            args: Prisma.LeaderboardItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LeaderboardItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>[];
          };
          delete: {
            args: Prisma.LeaderboardItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>;
          };
          update: {
            args: Prisma.LeaderboardItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>;
          };
          deleteMany: {
            args: Prisma.LeaderboardItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LeaderboardItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LeaderboardItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>[];
          };
          upsert: {
            args: Prisma.LeaderboardItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardItemPayload>;
          };
          aggregate: {
            args: Prisma.LeaderboardItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeaderboardItem>;
          };
          groupBy: {
            args: Prisma.LeaderboardItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LeaderboardItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.LeaderboardItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<LeaderboardItemCountAggregateOutputType>
              | number;
          };
        };
      };
      DayActivity: {
        payload: Prisma.$DayActivityPayload<ExtArgs>;
        fields: Prisma.DayActivityFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DayActivityFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DayActivityFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>;
          };
          findFirst: {
            args: Prisma.DayActivityFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DayActivityFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>;
          };
          findMany: {
            args: Prisma.DayActivityFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[];
          };
          create: {
            args: Prisma.DayActivityCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>;
          };
          createMany: {
            args: Prisma.DayActivityCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DayActivityCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[];
          };
          delete: {
            args: Prisma.DayActivityDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>;
          };
          update: {
            args: Prisma.DayActivityUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>;
          };
          deleteMany: {
            args: Prisma.DayActivityDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DayActivityUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DayActivityUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[];
          };
          upsert: {
            args: Prisma.DayActivityUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>;
          };
          aggregate: {
            args: Prisma.DayActivityAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDayActivity>;
          };
          groupBy: {
            args: Prisma.DayActivityGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DayActivityGroupByOutputType>[];
          };
          count: {
            args: Prisma.DayActivityCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<DayActivityCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    videoItem?: VideoItemOmit;
    leaderboardItem?: LeaderboardItemOmit;
    dayActivity?: DayActivityOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    picture: string | null;
    googleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    picture: string | null;
    googleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    picture: number;
    googleId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    picture?: true;
    googleId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    picture?: true;
    googleId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    picture?: true;
    googleId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    picture: string | null;
    googleId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      picture?: boolean;
      googleId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      picture?: boolean;
      googleId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      picture?: boolean;
      googleId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    picture?: boolean;
    googleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'name'
    | 'picture'
    | 'googleId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string;
        picture: string | null;
        googleId: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly picture: FieldRef<'User', 'String'>;
    readonly googleId: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
  };

  /**
   * Model VideoItem
   */

  export type AggregateVideoItem = {
    _count: VideoItemCountAggregateOutputType | null;
    _avg: VideoItemAvgAggregateOutputType | null;
    _sum: VideoItemSumAggregateOutputType | null;
    _min: VideoItemMinAggregateOutputType | null;
    _max: VideoItemMaxAggregateOutputType | null;
  };

  export type VideoItemAvgAggregateOutputType = {
    id: number | null;
  };

  export type VideoItemSumAggregateOutputType = {
    id: number | null;
  };

  export type VideoItemMinAggregateOutputType = {
    id: number | null;
    category: string | null;
    thumbnail: string | null;
    title: string | null;
    duration: string | null;
    instructor: string | null;
    views: string | null;
    videoUrl: string | null;
  };

  export type VideoItemMaxAggregateOutputType = {
    id: number | null;
    category: string | null;
    thumbnail: string | null;
    title: string | null;
    duration: string | null;
    instructor: string | null;
    views: string | null;
    videoUrl: string | null;
  };

  export type VideoItemCountAggregateOutputType = {
    id: number;
    category: number;
    thumbnail: number;
    title: number;
    duration: number;
    instructor: number;
    views: number;
    videoUrl: number;
    _all: number;
  };

  export type VideoItemAvgAggregateInputType = {
    id?: true;
  };

  export type VideoItemSumAggregateInputType = {
    id?: true;
  };

  export type VideoItemMinAggregateInputType = {
    id?: true;
    category?: true;
    thumbnail?: true;
    title?: true;
    duration?: true;
    instructor?: true;
    views?: true;
    videoUrl?: true;
  };

  export type VideoItemMaxAggregateInputType = {
    id?: true;
    category?: true;
    thumbnail?: true;
    title?: true;
    duration?: true;
    instructor?: true;
    views?: true;
    videoUrl?: true;
  };

  export type VideoItemCountAggregateInputType = {
    id?: true;
    category?: true;
    thumbnail?: true;
    title?: true;
    duration?: true;
    instructor?: true;
    views?: true;
    videoUrl?: true;
    _all?: true;
  };

  export type VideoItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which VideoItem to aggregate.
     */
    where?: VideoItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoItems to fetch.
     */
    orderBy?:
      | VideoItemOrderByWithRelationInput
      | VideoItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VideoItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VideoItems
     **/
    _count?: true | VideoItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VideoItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VideoItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VideoItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VideoItemMaxAggregateInputType;
  };

  export type GetVideoItemAggregateType<T extends VideoItemAggregateArgs> = {
    [P in keyof T & keyof AggregateVideoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoItem[P]>
      : GetScalarType<T[P], AggregateVideoItem[P]>;
  };

  export type VideoItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VideoItemWhereInput;
    orderBy?:
      | VideoItemOrderByWithAggregationInput
      | VideoItemOrderByWithAggregationInput[];
    by: VideoItemScalarFieldEnum[] | VideoItemScalarFieldEnum;
    having?: VideoItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoItemCountAggregateInputType | true;
    _avg?: VideoItemAvgAggregateInputType;
    _sum?: VideoItemSumAggregateInputType;
    _min?: VideoItemMinAggregateInputType;
    _max?: VideoItemMaxAggregateInputType;
  };

  export type VideoItemGroupByOutputType = {
    id: number;
    category: string;
    thumbnail: string;
    title: string;
    duration: string;
    instructor: string;
    views: string;
    videoUrl: string | null;
    _count: VideoItemCountAggregateOutputType | null;
    _avg: VideoItemAvgAggregateOutputType | null;
    _sum: VideoItemSumAggregateOutputType | null;
    _min: VideoItemMinAggregateOutputType | null;
    _max: VideoItemMaxAggregateOutputType | null;
  };

  type GetVideoItemGroupByPayload<T extends VideoItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VideoItemGroupByOutputType, T['by']> & {
          [P in keyof T & keyof VideoItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoItemGroupByOutputType[P]>
            : GetScalarType<T[P], VideoItemGroupByOutputType[P]>;
        }
      >
    >;

  export type VideoItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      category?: boolean;
      thumbnail?: boolean;
      title?: boolean;
      duration?: boolean;
      instructor?: boolean;
      views?: boolean;
      videoUrl?: boolean;
    },
    ExtArgs['result']['videoItem']
  >;

  export type VideoItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      category?: boolean;
      thumbnail?: boolean;
      title?: boolean;
      duration?: boolean;
      instructor?: boolean;
      views?: boolean;
      videoUrl?: boolean;
    },
    ExtArgs['result']['videoItem']
  >;

  export type VideoItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      category?: boolean;
      thumbnail?: boolean;
      title?: boolean;
      duration?: boolean;
      instructor?: boolean;
      views?: boolean;
      videoUrl?: boolean;
    },
    ExtArgs['result']['videoItem']
  >;

  export type VideoItemSelectScalar = {
    id?: boolean;
    category?: boolean;
    thumbnail?: boolean;
    title?: boolean;
    duration?: boolean;
    instructor?: boolean;
    views?: boolean;
    videoUrl?: boolean;
  };

  export type VideoItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'category'
    | 'thumbnail'
    | 'title'
    | 'duration'
    | 'instructor'
    | 'views'
    | 'videoUrl',
    ExtArgs['result']['videoItem']
  >;

  export type $VideoItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'VideoItem';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        category: string;
        thumbnail: string;
        title: string;
        duration: string;
        instructor: string;
        views: string;
        videoUrl: string | null;
      },
      ExtArgs['result']['videoItem']
    >;
    composites: {};
  };

  type VideoItemGetPayload<
    S extends boolean | null | undefined | VideoItemDefaultArgs,
  > = $Result.GetResult<Prisma.$VideoItemPayload, S>;

  type VideoItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    VideoItemFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: VideoItemCountAggregateInputType | true;
  };

  export interface VideoItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['VideoItem'];
      meta: { name: 'VideoItem' };
    };
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
    findUnique<T extends VideoItemFindUniqueArgs>(
      args: SelectSubset<T, VideoItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends VideoItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VideoItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends VideoItemFindFirstArgs>(
      args?: SelectSubset<T, VideoItemFindFirstArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends VideoItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VideoItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends VideoItemFindManyArgs>(
      args?: SelectSubset<T, VideoItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends VideoItemCreateArgs>(
      args: SelectSubset<T, VideoItemCreateArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends VideoItemCreateManyArgs>(
      args?: SelectSubset<T, VideoItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends VideoItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VideoItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends VideoItemDeleteArgs>(
      args: SelectSubset<T, VideoItemDeleteArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends VideoItemUpdateArgs>(
      args: SelectSubset<T, VideoItemUpdateArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends VideoItemDeleteManyArgs>(
      args?: SelectSubset<T, VideoItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends VideoItemUpdateManyArgs>(
      args: SelectSubset<T, VideoItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends VideoItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VideoItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends VideoItemUpsertArgs>(
      args: SelectSubset<T, VideoItemUpsertArgs<ExtArgs>>,
    ): Prisma__VideoItemClient<
      $Result.GetResult<
        Prisma.$VideoItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends VideoItemAggregateArgs>(
      args: Subset<T, VideoItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetVideoItemAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VideoItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetVideoItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__VideoItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the VideoItem model
   */
  interface VideoItemFieldRefs {
    readonly id: FieldRef<'VideoItem', 'Int'>;
    readonly category: FieldRef<'VideoItem', 'String'>;
    readonly thumbnail: FieldRef<'VideoItem', 'String'>;
    readonly title: FieldRef<'VideoItem', 'String'>;
    readonly duration: FieldRef<'VideoItem', 'String'>;
    readonly instructor: FieldRef<'VideoItem', 'String'>;
    readonly views: FieldRef<'VideoItem', 'String'>;
    readonly videoUrl: FieldRef<'VideoItem', 'String'>;
  }

  // Custom InputTypes
  /**
   * VideoItem findUnique
   */
  export type VideoItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * Filter, which VideoItem to fetch.
     */
    where: VideoItemWhereUniqueInput;
  };

  /**
   * VideoItem findUniqueOrThrow
   */
  export type VideoItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * Filter, which VideoItem to fetch.
     */
    where: VideoItemWhereUniqueInput;
  };

  /**
   * VideoItem findFirst
   */
  export type VideoItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * Filter, which VideoItem to fetch.
     */
    where?: VideoItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoItems to fetch.
     */
    orderBy?:
      | VideoItemOrderByWithRelationInput
      | VideoItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VideoItems.
     */
    cursor?: VideoItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VideoItems.
     */
    distinct?: VideoItemScalarFieldEnum | VideoItemScalarFieldEnum[];
  };

  /**
   * VideoItem findFirstOrThrow
   */
  export type VideoItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * Filter, which VideoItem to fetch.
     */
    where?: VideoItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoItems to fetch.
     */
    orderBy?:
      | VideoItemOrderByWithRelationInput
      | VideoItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VideoItems.
     */
    cursor?: VideoItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VideoItems.
     */
    distinct?: VideoItemScalarFieldEnum | VideoItemScalarFieldEnum[];
  };

  /**
   * VideoItem findMany
   */
  export type VideoItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * Filter, which VideoItems to fetch.
     */
    where?: VideoItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoItems to fetch.
     */
    orderBy?:
      | VideoItemOrderByWithRelationInput
      | VideoItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VideoItems.
     */
    cursor?: VideoItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoItems.
     */
    skip?: number;
    distinct?: VideoItemScalarFieldEnum | VideoItemScalarFieldEnum[];
  };

  /**
   * VideoItem create
   */
  export type VideoItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * The data needed to create a VideoItem.
     */
    data: XOR<VideoItemCreateInput, VideoItemUncheckedCreateInput>;
  };

  /**
   * VideoItem createMany
   */
  export type VideoItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many VideoItems.
     */
    data: VideoItemCreateManyInput | VideoItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VideoItem createManyAndReturn
   */
  export type VideoItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * The data used to create many VideoItems.
     */
    data: VideoItemCreateManyInput | VideoItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VideoItem update
   */
  export type VideoItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * The data needed to update a VideoItem.
     */
    data: XOR<VideoItemUpdateInput, VideoItemUncheckedUpdateInput>;
    /**
     * Choose, which VideoItem to update.
     */
    where: VideoItemWhereUniqueInput;
  };

  /**
   * VideoItem updateMany
   */
  export type VideoItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update VideoItems.
     */
    data: XOR<
      VideoItemUpdateManyMutationInput,
      VideoItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which VideoItems to update
     */
    where?: VideoItemWhereInput;
    /**
     * Limit how many VideoItems to update.
     */
    limit?: number;
  };

  /**
   * VideoItem updateManyAndReturn
   */
  export type VideoItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * The data used to update VideoItems.
     */
    data: XOR<
      VideoItemUpdateManyMutationInput,
      VideoItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which VideoItems to update
     */
    where?: VideoItemWhereInput;
    /**
     * Limit how many VideoItems to update.
     */
    limit?: number;
  };

  /**
   * VideoItem upsert
   */
  export type VideoItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * The filter to search for the VideoItem to update in case it exists.
     */
    where: VideoItemWhereUniqueInput;
    /**
     * In case the VideoItem found by the `where` argument doesn't exist, create a new VideoItem with this data.
     */
    create: XOR<VideoItemCreateInput, VideoItemUncheckedCreateInput>;
    /**
     * In case the VideoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoItemUpdateInput, VideoItemUncheckedUpdateInput>;
  };

  /**
   * VideoItem delete
   */
  export type VideoItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
    /**
     * Filter which VideoItem to delete.
     */
    where: VideoItemWhereUniqueInput;
  };

  /**
   * VideoItem deleteMany
   */
  export type VideoItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which VideoItems to delete
     */
    where?: VideoItemWhereInput;
    /**
     * Limit how many VideoItems to delete.
     */
    limit?: number;
  };

  /**
   * VideoItem without action
   */
  export type VideoItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VideoItem
     */
    select?: VideoItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoItem
     */
    omit?: VideoItemOmit<ExtArgs> | null;
  };

  /**
   * Model LeaderboardItem
   */

  export type AggregateLeaderboardItem = {
    _count: LeaderboardItemCountAggregateOutputType | null;
    _avg: LeaderboardItemAvgAggregateOutputType | null;
    _sum: LeaderboardItemSumAggregateOutputType | null;
    _min: LeaderboardItemMinAggregateOutputType | null;
    _max: LeaderboardItemMaxAggregateOutputType | null;
  };

  export type LeaderboardItemAvgAggregateOutputType = {
    id: number | null;
    rank: number | null;
  };

  export type LeaderboardItemSumAggregateOutputType = {
    id: number | null;
    rank: number | null;
  };

  export type LeaderboardItemMinAggregateOutputType = {
    id: number | null;
    rank: number | null;
    init: string | null;
    name: string | null;
    type: string | null;
    points: string | null;
  };

  export type LeaderboardItemMaxAggregateOutputType = {
    id: number | null;
    rank: number | null;
    init: string | null;
    name: string | null;
    type: string | null;
    points: string | null;
  };

  export type LeaderboardItemCountAggregateOutputType = {
    id: number;
    rank: number;
    init: number;
    name: number;
    type: number;
    points: number;
    _all: number;
  };

  export type LeaderboardItemAvgAggregateInputType = {
    id?: true;
    rank?: true;
  };

  export type LeaderboardItemSumAggregateInputType = {
    id?: true;
    rank?: true;
  };

  export type LeaderboardItemMinAggregateInputType = {
    id?: true;
    rank?: true;
    init?: true;
    name?: true;
    type?: true;
    points?: true;
  };

  export type LeaderboardItemMaxAggregateInputType = {
    id?: true;
    rank?: true;
    init?: true;
    name?: true;
    type?: true;
    points?: true;
  };

  export type LeaderboardItemCountAggregateInputType = {
    id?: true;
    rank?: true;
    init?: true;
    name?: true;
    type?: true;
    points?: true;
    _all?: true;
  };

  export type LeaderboardItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LeaderboardItem to aggregate.
     */
    where?: LeaderboardItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?:
      | LeaderboardItemOrderByWithRelationInput
      | LeaderboardItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LeaderboardItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeaderboardItems
     **/
    _count?: true | LeaderboardItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LeaderboardItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LeaderboardItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeaderboardItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeaderboardItemMaxAggregateInputType;
  };

  export type GetLeaderboardItemAggregateType<
    T extends LeaderboardItemAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateLeaderboardItem]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboardItem[P]>
      : GetScalarType<T[P], AggregateLeaderboardItem[P]>;
  };

  export type LeaderboardItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaderboardItemWhereInput;
    orderBy?:
      | LeaderboardItemOrderByWithAggregationInput
      | LeaderboardItemOrderByWithAggregationInput[];
    by: LeaderboardItemScalarFieldEnum[] | LeaderboardItemScalarFieldEnum;
    having?: LeaderboardItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaderboardItemCountAggregateInputType | true;
    _avg?: LeaderboardItemAvgAggregateInputType;
    _sum?: LeaderboardItemSumAggregateInputType;
    _min?: LeaderboardItemMinAggregateInputType;
    _max?: LeaderboardItemMaxAggregateInputType;
  };

  export type LeaderboardItemGroupByOutputType = {
    id: number;
    rank: number;
    init: string;
    name: string;
    type: string;
    points: string;
    _count: LeaderboardItemCountAggregateOutputType | null;
    _avg: LeaderboardItemAvgAggregateOutputType | null;
    _sum: LeaderboardItemSumAggregateOutputType | null;
    _min: LeaderboardItemMinAggregateOutputType | null;
    _max: LeaderboardItemMaxAggregateOutputType | null;
  };

  type GetLeaderboardItemGroupByPayload<T extends LeaderboardItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LeaderboardItemGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof LeaderboardItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardItemGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardItemGroupByOutputType[P]>;
        }
      >
    >;

  export type LeaderboardItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rank?: boolean;
      init?: boolean;
      name?: boolean;
      type?: boolean;
      points?: boolean;
    },
    ExtArgs['result']['leaderboardItem']
  >;

  export type LeaderboardItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rank?: boolean;
      init?: boolean;
      name?: boolean;
      type?: boolean;
      points?: boolean;
    },
    ExtArgs['result']['leaderboardItem']
  >;

  export type LeaderboardItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rank?: boolean;
      init?: boolean;
      name?: boolean;
      type?: boolean;
      points?: boolean;
    },
    ExtArgs['result']['leaderboardItem']
  >;

  export type LeaderboardItemSelectScalar = {
    id?: boolean;
    rank?: boolean;
    init?: boolean;
    name?: boolean;
    type?: boolean;
    points?: boolean;
  };

  export type LeaderboardItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'rank' | 'init' | 'name' | 'type' | 'points',
    ExtArgs['result']['leaderboardItem']
  >;

  export type $LeaderboardItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'LeaderboardItem';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        rank: number;
        init: string;
        name: string;
        type: string;
        points: string;
      },
      ExtArgs['result']['leaderboardItem']
    >;
    composites: {};
  };

  type LeaderboardItemGetPayload<
    S extends boolean | null | undefined | LeaderboardItemDefaultArgs,
  > = $Result.GetResult<Prisma.$LeaderboardItemPayload, S>;

  type LeaderboardItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    LeaderboardItemFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LeaderboardItemCountAggregateInputType | true;
  };

  export interface LeaderboardItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['LeaderboardItem'];
      meta: { name: 'LeaderboardItem' };
    };
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
    findUnique<T extends LeaderboardItemFindUniqueArgs>(
      args: SelectSubset<T, LeaderboardItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends LeaderboardItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LeaderboardItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends LeaderboardItemFindFirstArgs>(
      args?: SelectSubset<T, LeaderboardItemFindFirstArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends LeaderboardItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeaderboardItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends LeaderboardItemFindManyArgs>(
      args?: SelectSubset<T, LeaderboardItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends LeaderboardItemCreateArgs>(
      args: SelectSubset<T, LeaderboardItemCreateArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends LeaderboardItemCreateManyArgs>(
      args?: SelectSubset<T, LeaderboardItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends LeaderboardItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LeaderboardItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends LeaderboardItemDeleteArgs>(
      args: SelectSubset<T, LeaderboardItemDeleteArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends LeaderboardItemUpdateArgs>(
      args: SelectSubset<T, LeaderboardItemUpdateArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends LeaderboardItemDeleteManyArgs>(
      args?: SelectSubset<T, LeaderboardItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends LeaderboardItemUpdateManyArgs>(
      args: SelectSubset<T, LeaderboardItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends LeaderboardItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LeaderboardItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends LeaderboardItemUpsertArgs>(
      args: SelectSubset<T, LeaderboardItemUpsertArgs<ExtArgs>>,
    ): Prisma__LeaderboardItemClient<
      $Result.GetResult<
        Prisma.$LeaderboardItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends LeaderboardItemAggregateArgs>(
      args: Subset<T, LeaderboardItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetLeaderboardItemAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LeaderboardItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLeaderboardItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__LeaderboardItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LeaderboardItem model
   */
  interface LeaderboardItemFieldRefs {
    readonly id: FieldRef<'LeaderboardItem', 'Int'>;
    readonly rank: FieldRef<'LeaderboardItem', 'Int'>;
    readonly init: FieldRef<'LeaderboardItem', 'String'>;
    readonly name: FieldRef<'LeaderboardItem', 'String'>;
    readonly type: FieldRef<'LeaderboardItem', 'String'>;
    readonly points: FieldRef<'LeaderboardItem', 'String'>;
  }

  // Custom InputTypes
  /**
   * LeaderboardItem findUnique
   */
  export type LeaderboardItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where: LeaderboardItemWhereUniqueInput;
  };

  /**
   * LeaderboardItem findUniqueOrThrow
   */
  export type LeaderboardItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where: LeaderboardItemWhereUniqueInput;
  };

  /**
   * LeaderboardItem findFirst
   */
  export type LeaderboardItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where?: LeaderboardItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?:
      | LeaderboardItemOrderByWithRelationInput
      | LeaderboardItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeaderboardItems.
     */
    cursor?: LeaderboardItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeaderboardItems.
     */
    distinct?:
      | LeaderboardItemScalarFieldEnum
      | LeaderboardItemScalarFieldEnum[];
  };

  /**
   * LeaderboardItem findFirstOrThrow
   */
  export type LeaderboardItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * Filter, which LeaderboardItem to fetch.
     */
    where?: LeaderboardItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?:
      | LeaderboardItemOrderByWithRelationInput
      | LeaderboardItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeaderboardItems.
     */
    cursor?: LeaderboardItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeaderboardItems.
     */
    distinct?:
      | LeaderboardItemScalarFieldEnum
      | LeaderboardItemScalarFieldEnum[];
  };

  /**
   * LeaderboardItem findMany
   */
  export type LeaderboardItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * Filter, which LeaderboardItems to fetch.
     */
    where?: LeaderboardItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardItems to fetch.
     */
    orderBy?:
      | LeaderboardItemOrderByWithRelationInput
      | LeaderboardItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeaderboardItems.
     */
    cursor?: LeaderboardItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardItems.
     */
    skip?: number;
    distinct?:
      | LeaderboardItemScalarFieldEnum
      | LeaderboardItemScalarFieldEnum[];
  };

  /**
   * LeaderboardItem create
   */
  export type LeaderboardItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * The data needed to create a LeaderboardItem.
     */
    data: XOR<LeaderboardItemCreateInput, LeaderboardItemUncheckedCreateInput>;
  };

  /**
   * LeaderboardItem createMany
   */
  export type LeaderboardItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LeaderboardItems.
     */
    data: LeaderboardItemCreateManyInput | LeaderboardItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LeaderboardItem createManyAndReturn
   */
  export type LeaderboardItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * The data used to create many LeaderboardItems.
     */
    data: LeaderboardItemCreateManyInput | LeaderboardItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LeaderboardItem update
   */
  export type LeaderboardItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * The data needed to update a LeaderboardItem.
     */
    data: XOR<LeaderboardItemUpdateInput, LeaderboardItemUncheckedUpdateInput>;
    /**
     * Choose, which LeaderboardItem to update.
     */
    where: LeaderboardItemWhereUniqueInput;
  };

  /**
   * LeaderboardItem updateMany
   */
  export type LeaderboardItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LeaderboardItems.
     */
    data: XOR<
      LeaderboardItemUpdateManyMutationInput,
      LeaderboardItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which LeaderboardItems to update
     */
    where?: LeaderboardItemWhereInput;
    /**
     * Limit how many LeaderboardItems to update.
     */
    limit?: number;
  };

  /**
   * LeaderboardItem updateManyAndReturn
   */
  export type LeaderboardItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * The data used to update LeaderboardItems.
     */
    data: XOR<
      LeaderboardItemUpdateManyMutationInput,
      LeaderboardItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which LeaderboardItems to update
     */
    where?: LeaderboardItemWhereInput;
    /**
     * Limit how many LeaderboardItems to update.
     */
    limit?: number;
  };

  /**
   * LeaderboardItem upsert
   */
  export type LeaderboardItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * The filter to search for the LeaderboardItem to update in case it exists.
     */
    where: LeaderboardItemWhereUniqueInput;
    /**
     * In case the LeaderboardItem found by the `where` argument doesn't exist, create a new LeaderboardItem with this data.
     */
    create: XOR<
      LeaderboardItemCreateInput,
      LeaderboardItemUncheckedCreateInput
    >;
    /**
     * In case the LeaderboardItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      LeaderboardItemUpdateInput,
      LeaderboardItemUncheckedUpdateInput
    >;
  };

  /**
   * LeaderboardItem delete
   */
  export type LeaderboardItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
    /**
     * Filter which LeaderboardItem to delete.
     */
    where: LeaderboardItemWhereUniqueInput;
  };

  /**
   * LeaderboardItem deleteMany
   */
  export type LeaderboardItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LeaderboardItems to delete
     */
    where?: LeaderboardItemWhereInput;
    /**
     * Limit how many LeaderboardItems to delete.
     */
    limit?: number;
  };

  /**
   * LeaderboardItem without action
   */
  export type LeaderboardItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardItem
     */
    select?: LeaderboardItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardItem
     */
    omit?: LeaderboardItemOmit<ExtArgs> | null;
  };

  /**
   * Model DayActivity
   */

  export type AggregateDayActivity = {
    _count: DayActivityCountAggregateOutputType | null;
    _avg: DayActivityAvgAggregateOutputType | null;
    _sum: DayActivitySumAggregateOutputType | null;
    _min: DayActivityMinAggregateOutputType | null;
    _max: DayActivityMaxAggregateOutputType | null;
  };

  export type DayActivityAvgAggregateOutputType = {
    id: number | null;
  };

  export type DayActivitySumAggregateOutputType = {
    id: number | null;
  };

  export type DayActivityMinAggregateOutputType = {
    id: number | null;
    day: string | null;
  };

  export type DayActivityMaxAggregateOutputType = {
    id: number | null;
    day: string | null;
  };

  export type DayActivityCountAggregateOutputType = {
    id: number;
    day: number;
    active: number;
    _all: number;
  };

  export type DayActivityAvgAggregateInputType = {
    id?: true;
  };

  export type DayActivitySumAggregateInputType = {
    id?: true;
  };

  export type DayActivityMinAggregateInputType = {
    id?: true;
    day?: true;
  };

  export type DayActivityMaxAggregateInputType = {
    id?: true;
    day?: true;
  };

  export type DayActivityCountAggregateInputType = {
    id?: true;
    day?: true;
    active?: true;
    _all?: true;
  };

  export type DayActivityAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which DayActivity to aggregate.
     */
    where?: DayActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DayActivities to fetch.
     */
    orderBy?:
      | DayActivityOrderByWithRelationInput
      | DayActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DayActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DayActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DayActivities
     **/
    _count?: true | DayActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DayActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DayActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DayActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DayActivityMaxAggregateInputType;
  };

  export type GetDayActivityAggregateType<T extends DayActivityAggregateArgs> =
    {
      [P in keyof T & keyof AggregateDayActivity]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateDayActivity[P]>
        : GetScalarType<T[P], AggregateDayActivity[P]>;
    };

  export type DayActivityGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DayActivityWhereInput;
    orderBy?:
      | DayActivityOrderByWithAggregationInput
      | DayActivityOrderByWithAggregationInput[];
    by: DayActivityScalarFieldEnum[] | DayActivityScalarFieldEnum;
    having?: DayActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DayActivityCountAggregateInputType | true;
    _avg?: DayActivityAvgAggregateInputType;
    _sum?: DayActivitySumAggregateInputType;
    _min?: DayActivityMinAggregateInputType;
    _max?: DayActivityMaxAggregateInputType;
  };

  export type DayActivityGroupByOutputType = {
    id: number;
    day: string;
    active: boolean[];
    _count: DayActivityCountAggregateOutputType | null;
    _avg: DayActivityAvgAggregateOutputType | null;
    _sum: DayActivitySumAggregateOutputType | null;
    _min: DayActivityMinAggregateOutputType | null;
    _max: DayActivityMaxAggregateOutputType | null;
  };

  type GetDayActivityGroupByPayload<T extends DayActivityGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DayActivityGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof DayActivityGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DayActivityGroupByOutputType[P]>;
        }
      >
    >;

  export type DayActivitySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      day?: boolean;
      active?: boolean;
    },
    ExtArgs['result']['dayActivity']
  >;

  export type DayActivitySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      day?: boolean;
      active?: boolean;
    },
    ExtArgs['result']['dayActivity']
  >;

  export type DayActivitySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      day?: boolean;
      active?: boolean;
    },
    ExtArgs['result']['dayActivity']
  >;

  export type DayActivitySelectScalar = {
    id?: boolean;
    day?: boolean;
    active?: boolean;
  };

  export type DayActivityOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'day' | 'active',
    ExtArgs['result']['dayActivity']
  >;

  export type $DayActivityPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'DayActivity';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        day: string;
        active: boolean[];
      },
      ExtArgs['result']['dayActivity']
    >;
    composites: {};
  };

  type DayActivityGetPayload<
    S extends boolean | null | undefined | DayActivityDefaultArgs,
  > = $Result.GetResult<Prisma.$DayActivityPayload, S>;

  type DayActivityCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    DayActivityFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: DayActivityCountAggregateInputType | true;
  };

  export interface DayActivityDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['DayActivity'];
      meta: { name: 'DayActivity' };
    };
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
    findUnique<T extends DayActivityFindUniqueArgs>(
      args: SelectSubset<T, DayActivityFindUniqueArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends DayActivityFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DayActivityFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends DayActivityFindFirstArgs>(
      args?: SelectSubset<T, DayActivityFindFirstArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends DayActivityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DayActivityFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends DayActivityFindManyArgs>(
      args?: SelectSubset<T, DayActivityFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends DayActivityCreateArgs>(
      args: SelectSubset<T, DayActivityCreateArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends DayActivityCreateManyArgs>(
      args?: SelectSubset<T, DayActivityCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends DayActivityCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DayActivityCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends DayActivityDeleteArgs>(
      args: SelectSubset<T, DayActivityDeleteArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends DayActivityUpdateArgs>(
      args: SelectSubset<T, DayActivityUpdateArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends DayActivityDeleteManyArgs>(
      args?: SelectSubset<T, DayActivityDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends DayActivityUpdateManyArgs>(
      args: SelectSubset<T, DayActivityUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends DayActivityUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DayActivityUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends DayActivityUpsertArgs>(
      args: SelectSubset<T, DayActivityUpsertArgs<ExtArgs>>,
    ): Prisma__DayActivityClient<
      $Result.GetResult<
        Prisma.$DayActivityPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends DayActivityAggregateArgs>(
      args: Subset<T, DayActivityAggregateArgs>,
    ): Prisma.PrismaPromise<GetDayActivityAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, DayActivityGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetDayActivityGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__DayActivityClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the DayActivity model
   */
  interface DayActivityFieldRefs {
    readonly id: FieldRef<'DayActivity', 'Int'>;
    readonly day: FieldRef<'DayActivity', 'String'>;
    readonly active: FieldRef<'DayActivity', 'Boolean[]'>;
  }

  // Custom InputTypes
  /**
   * DayActivity findUnique
   */
  export type DayActivityFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * Filter, which DayActivity to fetch.
     */
    where: DayActivityWhereUniqueInput;
  };

  /**
   * DayActivity findUniqueOrThrow
   */
  export type DayActivityFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * Filter, which DayActivity to fetch.
     */
    where: DayActivityWhereUniqueInput;
  };

  /**
   * DayActivity findFirst
   */
  export type DayActivityFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * Filter, which DayActivity to fetch.
     */
    where?: DayActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DayActivities to fetch.
     */
    orderBy?:
      | DayActivityOrderByWithRelationInput
      | DayActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DayActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DayActivities.
     */
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[];
  };

  /**
   * DayActivity findFirstOrThrow
   */
  export type DayActivityFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * Filter, which DayActivity to fetch.
     */
    where?: DayActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DayActivities to fetch.
     */
    orderBy?:
      | DayActivityOrderByWithRelationInput
      | DayActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DayActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DayActivities.
     */
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[];
  };

  /**
   * DayActivity findMany
   */
  export type DayActivityFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * Filter, which DayActivities to fetch.
     */
    where?: DayActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DayActivities to fetch.
     */
    orderBy?:
      | DayActivityOrderByWithRelationInput
      | DayActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DayActivities.
     */
    skip?: number;
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[];
  };

  /**
   * DayActivity create
   */
  export type DayActivityCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * The data needed to create a DayActivity.
     */
    data: XOR<DayActivityCreateInput, DayActivityUncheckedCreateInput>;
  };

  /**
   * DayActivity createMany
   */
  export type DayActivityCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many DayActivities.
     */
    data: DayActivityCreateManyInput | DayActivityCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * DayActivity createManyAndReturn
   */
  export type DayActivityCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many DayActivities.
     */
    data: DayActivityCreateManyInput | DayActivityCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * DayActivity update
   */
  export type DayActivityUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * The data needed to update a DayActivity.
     */
    data: XOR<DayActivityUpdateInput, DayActivityUncheckedUpdateInput>;
    /**
     * Choose, which DayActivity to update.
     */
    where: DayActivityWhereUniqueInput;
  };

  /**
   * DayActivity updateMany
   */
  export type DayActivityUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update DayActivities.
     */
    data: XOR<
      DayActivityUpdateManyMutationInput,
      DayActivityUncheckedUpdateManyInput
    >;
    /**
     * Filter which DayActivities to update
     */
    where?: DayActivityWhereInput;
    /**
     * Limit how many DayActivities to update.
     */
    limit?: number;
  };

  /**
   * DayActivity updateManyAndReturn
   */
  export type DayActivityUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * The data used to update DayActivities.
     */
    data: XOR<
      DayActivityUpdateManyMutationInput,
      DayActivityUncheckedUpdateManyInput
    >;
    /**
     * Filter which DayActivities to update
     */
    where?: DayActivityWhereInput;
    /**
     * Limit how many DayActivities to update.
     */
    limit?: number;
  };

  /**
   * DayActivity upsert
   */
  export type DayActivityUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * The filter to search for the DayActivity to update in case it exists.
     */
    where: DayActivityWhereUniqueInput;
    /**
     * In case the DayActivity found by the `where` argument doesn't exist, create a new DayActivity with this data.
     */
    create: XOR<DayActivityCreateInput, DayActivityUncheckedCreateInput>;
    /**
     * In case the DayActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayActivityUpdateInput, DayActivityUncheckedUpdateInput>;
  };

  /**
   * DayActivity delete
   */
  export type DayActivityDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
    /**
     * Filter which DayActivity to delete.
     */
    where: DayActivityWhereUniqueInput;
  };

  /**
   * DayActivity deleteMany
   */
  export type DayActivityDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which DayActivities to delete
     */
    where?: DayActivityWhereInput;
    /**
     * Limit how many DayActivities to delete.
     */
    limit?: number;
  };

  /**
   * DayActivity without action
   */
  export type DayActivityDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    name: 'name';
    picture: 'picture';
    googleId: 'googleId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VideoItemScalarFieldEnum: {
    id: 'id';
    category: 'category';
    thumbnail: 'thumbnail';
    title: 'title';
    duration: 'duration';
    instructor: 'instructor';
    views: 'views';
    videoUrl: 'videoUrl';
  };

  export type VideoItemScalarFieldEnum =
    (typeof VideoItemScalarFieldEnum)[keyof typeof VideoItemScalarFieldEnum];

  export const LeaderboardItemScalarFieldEnum: {
    id: 'id';
    rank: 'rank';
    init: 'init';
    name: 'name';
    type: 'type';
    points: 'points';
  };

  export type LeaderboardItemScalarFieldEnum =
    (typeof LeaderboardItemScalarFieldEnum)[keyof typeof LeaderboardItemScalarFieldEnum];

  export const DayActivityScalarFieldEnum: {
    id: 'id';
    day: 'day';
    active: 'active';
  };

  export type DayActivityScalarFieldEnum =
    (typeof DayActivityScalarFieldEnum)[keyof typeof DayActivityScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Boolean[]'
   */
  export type ListBooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    picture?: StringNullableFilter<'User'> | string | null;
    googleId?: StringNullableFilter<'User'> | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    picture?: SortOrderInput | SortOrder;
    googleId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      googleId?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<'User'> | string;
      picture?: StringNullableFilter<'User'> | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
    },
    'id' | 'email' | 'googleId'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    picture?: SortOrderInput | SortOrder;
    googleId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    picture?: StringNullableWithAggregatesFilter<'User'> | string | null;
    googleId?: StringNullableWithAggregatesFilter<'User'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type VideoItemWhereInput = {
    AND?: VideoItemWhereInput | VideoItemWhereInput[];
    OR?: VideoItemWhereInput[];
    NOT?: VideoItemWhereInput | VideoItemWhereInput[];
    id?: IntFilter<'VideoItem'> | number;
    category?: StringFilter<'VideoItem'> | string;
    thumbnail?: StringFilter<'VideoItem'> | string;
    title?: StringFilter<'VideoItem'> | string;
    duration?: StringFilter<'VideoItem'> | string;
    instructor?: StringFilter<'VideoItem'> | string;
    views?: StringFilter<'VideoItem'> | string;
    videoUrl?: StringNullableFilter<'VideoItem'> | string | null;
  };

  export type VideoItemOrderByWithRelationInput = {
    id?: SortOrder;
    category?: SortOrder;
    thumbnail?: SortOrder;
    title?: SortOrder;
    duration?: SortOrder;
    instructor?: SortOrder;
    views?: SortOrder;
    videoUrl?: SortOrderInput | SortOrder;
  };

  export type VideoItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: VideoItemWhereInput | VideoItemWhereInput[];
      OR?: VideoItemWhereInput[];
      NOT?: VideoItemWhereInput | VideoItemWhereInput[];
      category?: StringFilter<'VideoItem'> | string;
      thumbnail?: StringFilter<'VideoItem'> | string;
      title?: StringFilter<'VideoItem'> | string;
      duration?: StringFilter<'VideoItem'> | string;
      instructor?: StringFilter<'VideoItem'> | string;
      views?: StringFilter<'VideoItem'> | string;
      videoUrl?: StringNullableFilter<'VideoItem'> | string | null;
    },
    'id'
  >;

  export type VideoItemOrderByWithAggregationInput = {
    id?: SortOrder;
    category?: SortOrder;
    thumbnail?: SortOrder;
    title?: SortOrder;
    duration?: SortOrder;
    instructor?: SortOrder;
    views?: SortOrder;
    videoUrl?: SortOrderInput | SortOrder;
    _count?: VideoItemCountOrderByAggregateInput;
    _avg?: VideoItemAvgOrderByAggregateInput;
    _max?: VideoItemMaxOrderByAggregateInput;
    _min?: VideoItemMinOrderByAggregateInput;
    _sum?: VideoItemSumOrderByAggregateInput;
  };

  export type VideoItemScalarWhereWithAggregatesInput = {
    AND?:
      | VideoItemScalarWhereWithAggregatesInput
      | VideoItemScalarWhereWithAggregatesInput[];
    OR?: VideoItemScalarWhereWithAggregatesInput[];
    NOT?:
      | VideoItemScalarWhereWithAggregatesInput
      | VideoItemScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'VideoItem'> | number;
    category?: StringWithAggregatesFilter<'VideoItem'> | string;
    thumbnail?: StringWithAggregatesFilter<'VideoItem'> | string;
    title?: StringWithAggregatesFilter<'VideoItem'> | string;
    duration?: StringWithAggregatesFilter<'VideoItem'> | string;
    instructor?: StringWithAggregatesFilter<'VideoItem'> | string;
    views?: StringWithAggregatesFilter<'VideoItem'> | string;
    videoUrl?: StringNullableWithAggregatesFilter<'VideoItem'> | string | null;
  };

  export type LeaderboardItemWhereInput = {
    AND?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[];
    OR?: LeaderboardItemWhereInput[];
    NOT?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[];
    id?: IntFilter<'LeaderboardItem'> | number;
    rank?: IntFilter<'LeaderboardItem'> | number;
    init?: StringFilter<'LeaderboardItem'> | string;
    name?: StringFilter<'LeaderboardItem'> | string;
    type?: StringFilter<'LeaderboardItem'> | string;
    points?: StringFilter<'LeaderboardItem'> | string;
  };

  export type LeaderboardItemOrderByWithRelationInput = {
    id?: SortOrder;
    rank?: SortOrder;
    init?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    points?: SortOrder;
  };

  export type LeaderboardItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[];
      OR?: LeaderboardItemWhereInput[];
      NOT?: LeaderboardItemWhereInput | LeaderboardItemWhereInput[];
      rank?: IntFilter<'LeaderboardItem'> | number;
      init?: StringFilter<'LeaderboardItem'> | string;
      name?: StringFilter<'LeaderboardItem'> | string;
      type?: StringFilter<'LeaderboardItem'> | string;
      points?: StringFilter<'LeaderboardItem'> | string;
    },
    'id'
  >;

  export type LeaderboardItemOrderByWithAggregationInput = {
    id?: SortOrder;
    rank?: SortOrder;
    init?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    points?: SortOrder;
    _count?: LeaderboardItemCountOrderByAggregateInput;
    _avg?: LeaderboardItemAvgOrderByAggregateInput;
    _max?: LeaderboardItemMaxOrderByAggregateInput;
    _min?: LeaderboardItemMinOrderByAggregateInput;
    _sum?: LeaderboardItemSumOrderByAggregateInput;
  };

  export type LeaderboardItemScalarWhereWithAggregatesInput = {
    AND?:
      | LeaderboardItemScalarWhereWithAggregatesInput
      | LeaderboardItemScalarWhereWithAggregatesInput[];
    OR?: LeaderboardItemScalarWhereWithAggregatesInput[];
    NOT?:
      | LeaderboardItemScalarWhereWithAggregatesInput
      | LeaderboardItemScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'LeaderboardItem'> | number;
    rank?: IntWithAggregatesFilter<'LeaderboardItem'> | number;
    init?: StringWithAggregatesFilter<'LeaderboardItem'> | string;
    name?: StringWithAggregatesFilter<'LeaderboardItem'> | string;
    type?: StringWithAggregatesFilter<'LeaderboardItem'> | string;
    points?: StringWithAggregatesFilter<'LeaderboardItem'> | string;
  };

  export type DayActivityWhereInput = {
    AND?: DayActivityWhereInput | DayActivityWhereInput[];
    OR?: DayActivityWhereInput[];
    NOT?: DayActivityWhereInput | DayActivityWhereInput[];
    id?: IntFilter<'DayActivity'> | number;
    day?: StringFilter<'DayActivity'> | string;
    active?: BoolNullableListFilter<'DayActivity'>;
  };

  export type DayActivityOrderByWithRelationInput = {
    id?: SortOrder;
    day?: SortOrder;
    active?: SortOrder;
  };

  export type DayActivityWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: DayActivityWhereInput | DayActivityWhereInput[];
      OR?: DayActivityWhereInput[];
      NOT?: DayActivityWhereInput | DayActivityWhereInput[];
      day?: StringFilter<'DayActivity'> | string;
      active?: BoolNullableListFilter<'DayActivity'>;
    },
    'id'
  >;

  export type DayActivityOrderByWithAggregationInput = {
    id?: SortOrder;
    day?: SortOrder;
    active?: SortOrder;
    _count?: DayActivityCountOrderByAggregateInput;
    _avg?: DayActivityAvgOrderByAggregateInput;
    _max?: DayActivityMaxOrderByAggregateInput;
    _min?: DayActivityMinOrderByAggregateInput;
    _sum?: DayActivitySumOrderByAggregateInput;
  };

  export type DayActivityScalarWhereWithAggregatesInput = {
    AND?:
      | DayActivityScalarWhereWithAggregatesInput
      | DayActivityScalarWhereWithAggregatesInput[];
    OR?: DayActivityScalarWhereWithAggregatesInput[];
    NOT?:
      | DayActivityScalarWhereWithAggregatesInput
      | DayActivityScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'DayActivity'> | number;
    day?: StringWithAggregatesFilter<'DayActivity'> | string;
    active?: BoolNullableListFilter<'DayActivity'>;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    picture?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    picture?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    picture?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    picture?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    picture?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    picture?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    picture?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VideoItemCreateInput = {
    category: string;
    thumbnail: string;
    title: string;
    duration: string;
    instructor: string;
    views: string;
    videoUrl?: string | null;
  };

  export type VideoItemUncheckedCreateInput = {
    id?: number;
    category: string;
    thumbnail: string;
    title: string;
    duration: string;
    instructor: string;
    views: string;
    videoUrl?: string | null;
  };

  export type VideoItemUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string;
    thumbnail?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    instructor?: StringFieldUpdateOperationsInput | string;
    views?: StringFieldUpdateOperationsInput | string;
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VideoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    category?: StringFieldUpdateOperationsInput | string;
    thumbnail?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    instructor?: StringFieldUpdateOperationsInput | string;
    views?: StringFieldUpdateOperationsInput | string;
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VideoItemCreateManyInput = {
    id?: number;
    category: string;
    thumbnail: string;
    title: string;
    duration: string;
    instructor: string;
    views: string;
    videoUrl?: string | null;
  };

  export type VideoItemUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string;
    thumbnail?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    instructor?: StringFieldUpdateOperationsInput | string;
    views?: StringFieldUpdateOperationsInput | string;
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VideoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    category?: StringFieldUpdateOperationsInput | string;
    thumbnail?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    instructor?: StringFieldUpdateOperationsInput | string;
    views?: StringFieldUpdateOperationsInput | string;
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type LeaderboardItemCreateInput = {
    rank: number;
    init: string;
    name: string;
    type: string;
    points: string;
  };

  export type LeaderboardItemUncheckedCreateInput = {
    id?: number;
    rank: number;
    init: string;
    name: string;
    type: string;
    points: string;
  };

  export type LeaderboardItemUpdateInput = {
    rank?: IntFieldUpdateOperationsInput | number;
    init?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    points?: StringFieldUpdateOperationsInput | string;
  };

  export type LeaderboardItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    init?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    points?: StringFieldUpdateOperationsInput | string;
  };

  export type LeaderboardItemCreateManyInput = {
    id?: number;
    rank: number;
    init: string;
    name: string;
    type: string;
    points: string;
  };

  export type LeaderboardItemUpdateManyMutationInput = {
    rank?: IntFieldUpdateOperationsInput | number;
    init?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    points?: StringFieldUpdateOperationsInput | string;
  };

  export type LeaderboardItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    init?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    points?: StringFieldUpdateOperationsInput | string;
  };

  export type DayActivityCreateInput = {
    day: string;
    active?: DayActivityCreateactiveInput | boolean[];
  };

  export type DayActivityUncheckedCreateInput = {
    id?: number;
    day: string;
    active?: DayActivityCreateactiveInput | boolean[];
  };

  export type DayActivityUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string;
    active?: DayActivityUpdateactiveInput | boolean[];
  };

  export type DayActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    day?: StringFieldUpdateOperationsInput | string;
    active?: DayActivityUpdateactiveInput | boolean[];
  };

  export type DayActivityCreateManyInput = {
    id?: number;
    day: string;
    active?: DayActivityCreateactiveInput | boolean[];
  };

  export type DayActivityUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string;
    active?: DayActivityUpdateactiveInput | boolean[];
  };

  export type DayActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    day?: StringFieldUpdateOperationsInput | string;
    active?: DayActivityUpdateactiveInput | boolean[];
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    picture?: SortOrder;
    googleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    picture?: SortOrder;
    googleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    picture?: SortOrder;
    googleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type VideoItemCountOrderByAggregateInput = {
    id?: SortOrder;
    category?: SortOrder;
    thumbnail?: SortOrder;
    title?: SortOrder;
    duration?: SortOrder;
    instructor?: SortOrder;
    views?: SortOrder;
    videoUrl?: SortOrder;
  };

  export type VideoItemAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type VideoItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    category?: SortOrder;
    thumbnail?: SortOrder;
    title?: SortOrder;
    duration?: SortOrder;
    instructor?: SortOrder;
    views?: SortOrder;
    videoUrl?: SortOrder;
  };

  export type VideoItemMinOrderByAggregateInput = {
    id?: SortOrder;
    category?: SortOrder;
    thumbnail?: SortOrder;
    title?: SortOrder;
    duration?: SortOrder;
    instructor?: SortOrder;
    views?: SortOrder;
    videoUrl?: SortOrder;
  };

  export type VideoItemSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type LeaderboardItemCountOrderByAggregateInput = {
    id?: SortOrder;
    rank?: SortOrder;
    init?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    points?: SortOrder;
  };

  export type LeaderboardItemAvgOrderByAggregateInput = {
    id?: SortOrder;
    rank?: SortOrder;
  };

  export type LeaderboardItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    rank?: SortOrder;
    init?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    points?: SortOrder;
  };

  export type LeaderboardItemMinOrderByAggregateInput = {
    id?: SortOrder;
    rank?: SortOrder;
    init?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    points?: SortOrder;
  };

  export type LeaderboardItemSumOrderByAggregateInput = {
    id?: SortOrder;
    rank?: SortOrder;
  };

  export type BoolNullableListFilter<$PrismaModel = never> = {
    equals?: boolean[] | ListBooleanFieldRefInput<$PrismaModel> | null;
    has?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    hasEvery?: boolean[] | ListBooleanFieldRefInput<$PrismaModel>;
    hasSome?: boolean[] | ListBooleanFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type DayActivityCountOrderByAggregateInput = {
    id?: SortOrder;
    day?: SortOrder;
    active?: SortOrder;
  };

  export type DayActivityAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type DayActivityMaxOrderByAggregateInput = {
    id?: SortOrder;
    day?: SortOrder;
  };

  export type DayActivityMinOrderByAggregateInput = {
    id?: SortOrder;
    day?: SortOrder;
  };

  export type DayActivitySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DayActivityCreateactiveInput = {
    set: boolean[];
  };

  export type DayActivityUpdateactiveInput = {
    set?: boolean[];
    push?: boolean | boolean[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
