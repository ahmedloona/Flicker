#### __RESOURCES:__
1. Users
2. Photos
3. Albums
4. Comments
5. Tags

#### __JOINS:__
1. photos_albums_join
2. photos_tags_join

| __users__       |               |                           |
|-----------------|---------------|---------------------------|
| __column_name__ | __data_type__ | __details__               |
| id              | integer       | not null, primary key     |
| username        | string        | not null, indexed         |
| email           | string        | not null, indexed, unique |
| password_digest | string        | not null                  |
| session_token   | string        | not null, indexed. unique |
| created_at      | datetime      | not null                  |
| updated_at      | datetime      | not null                  |
|                 |               |                           |
| create_index    | username      | unique:true               |
| create_index    | session_token | unique:true               |


| __photos__    |           |                       |
|---------------|-----------|-----------------------|
| __column_name__ | __data_type__ | __details__               |
| id            | integer   | not null, primary key |
| user_id       | integer   | not null              |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |
| caption       | string    | ?                     |
| date taken    | datetime  | ?                     |
| date uploaded | datetime  | ?                     |
|               |           |                       |
| create_index  | user_id   |                       |
| create_index  | caption   | ?                     |

| __albums__   |           |                       |
|--------------|-----------|-----------------------|
| __column_name__  | __data_type__ | __details__   |
| id           | integer   | not null, primary key |
| user_id      | integer   | not null              |
| name         | string    | not null              |
| description  | text      | optional              |
| created_at   | datetime  | not null              |
| updated_at   | datetime  | not null              |
|              |           |                       |
| create_index | user_id   |                       |
| create_index | name      | ?                     |

| __photos_albums_join__ |           |                                                   |
|--------------------|-----------|---------------------------------------------------|
| __column_name__        | __data_type__ | __details__                                           |
| id                 | integer   | not null, primary key                             |
| photo_id           | integer   |                                                   |
| album_id           | integer   |                                                   |
| created_at         | datetime  | not null                                          |
| updated_at         | datetime  | not null                                          |
|                    |           |                                                   |
| create_index       | photo_id  | ? why index this. how does it speedup the search? |
| create_index       | album_id  | ? why index this                                  |

| __photos_tags_join__ |           |                                                   |
|------------------|-----------|---------------------------------------------------|
| __column_name__      | __data_type__ | __details__                                           |
| id               | integer   | not null, primary key                             |
| photo_id         | integer   |                                                   |
| tag_id           | integer   |                                                   |
| created_at       | datetime  | not null                                          |
| updated_at       | datetime  | not null                                          |
|                  |           |                                                   |
| create_index     | photo_id  | ? why index this. how does it speedup the search? |
| create_index     | tag_id    | ? why index this                                  |

| __tags__         |           |                       |
|--------------|-----------|-----------------------|
| __column_name__  | __data_type__ | __details__               |
| id           | integer   | not null, primary key |
| title        | string    | not null              |
| created_at   | datetime  | not null              |
| updated_at   | datetime  | not null              |
|              |           |                       |
| create_index | title     | unique:true ?         |


| __comments__     |           |                       |
|--------------|-----------|-----------------------|
| __column_name__  | __data_type__ | __details__               |
| id           | integer   | not null, primary key |
| user_id      | integer   |                       |
| photo_id     | integer   |                       |
| created_at   | datetime  | not null              |
| updated_at   | datetime  | not null              |
|              |           |                       |
| create_index | user_id   |                       |
| create_index | photo_id  |                       |
