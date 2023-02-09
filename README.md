# Exercise Tracker API

This api will allow the users of our react front-end application to CRUD exerciser and their rep counts.

This application uses token authentication instead of sessions.

## Resources

### Pets

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/exercise`             | `exercise#index`    |
| GET   | `/exercise/:id`             | `exercise#show`    |
| POST   | `/exercise`             | `exercise#create`    |
| PATCH  | `/exercise/:id` | `exercise#update`  |
| DELETE | `/exercise/:id`        | `exercise#delete`   |

### Users

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Toys

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/reps/:petId`             | `reps#create`    |
| PATCH  | `/reps/:petId/:toyId` | `reps#update`  |
| DELETE | `/reps/:petId/:toyId`        | `reps#delete`   |
