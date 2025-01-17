/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Base = "base",
	CustomAuth = "custom_auth",
	Everything = "everything",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields<T> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T extends object ? T : never
}

export type AuthSystemFields = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
}

// Record types for each collection

export type BaseRecord = {
	field?: string
}

export type CustomAuthRecord = {
	custom_field?: string
}

export enum EverythingSelectFieldOptions {
	"optionA" = "optionA",
	"OptionA" = "OptionA",
	"optionB" = "optionB",
	"optionC" = "optionC",
	"option with space" = "option with space",
	"sy?mb@!$" = "sy?mb@!$",
}
export type EverythingRecord<Tanother_json_field = unknown, Tjson_field = unknown> = {
	text_field?: string
	number_field?: number
	bool_field?: boolean
	email_field?: string
	url_field?: string
	date_field?: IsoDateString
	select_field?: EverythingSelectFieldOptions
	json_field?: null | Tjson_field
	another_json_field?: null | Tanother_json_field
	file_field?: string
	three_files_field?: string[]
	user_relation_field?: RecordIdString
	custom_relation_field?: RecordIdString[]
	post_relation_field?: RecordIdString
	select_field_no_values?: string
}

export type PostsRecord = {
	field?: string
	nonempty_field: string
	nonempty_bool: boolean
	field1?: number
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Expand types are used to define the expand object in the PocketBase API
type BaseExpandType = {
	// Doesn't have any relation
}
type CustomAuthExpandType = {
	// Doesn't have any relation
}
type EverythingExpandType = {
	user_relation_field: UsersResponse
	custom_relation_field: CustomAuthResponse[]
	post_relation_field: PostsResponse
}
export const EverythingExpandKeys = {
  	user_relation_field: "user_relation_field",
	custom_relation_field: "custom_relation_field",
	post_relation_field: "post_relation_field"
}
type PostsExpandType = {
	"everything(post_relation_field)": EverythingResponse[]
}
export const PostsExpandKeys = {
  	everything: "everything(post_relation_field)"
}
type UsersExpandType = {
	"everything(user_relation_field)": EverythingResponse[]
}
export const UsersExpandKeys = {
  	everything: "everything(user_relation_field)"
}

// Response types include system fields and match responses from the PocketBase API
export type BaseResponse = BaseRecord & BaseSystemFields<BaseExpandType>
export type CustomAuthResponse = CustomAuthRecord & BaseSystemFields<CustomAuthExpandType> & AuthSystemFields
export type EverythingResponse<Tanother_json_field = unknown, Tjson_field = unknown> = EverythingRecord<Tanother_json_field, Tjson_field> & BaseSystemFields<EverythingExpandType>
export type PostsResponse = PostsRecord & BaseSystemFields<PostsExpandType>
export type UsersResponse = UsersRecord & BaseSystemFields<UsersExpandType> & AuthSystemFields

export type CollectionRecords = {
	base: BaseRecord
	custom_auth: CustomAuthRecord
	everything: EverythingRecord
	posts: PostsRecord
	users: UsersRecord
}