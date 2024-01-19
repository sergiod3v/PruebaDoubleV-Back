Para iniciailizar los 3 servidores utilice el comando

# docker-compose build & docker-compose up

y revise su Docker Desktop para ver los puertos accessibles

##### REST

La información de conexión puede ser encotnrada en ./db/db.js o en el docker-compose.yml en la instancia de db

.env para ./rest
NODE_ENV="dev"
PORT=3000
DB_USER=root
DB_PASSWORD=root
DB_HOST=postgres
DB_NAME=tickets
DB_PORT=5432

La conexión de la base de datos se puede hacer de dos formas, un contenedor con la creación de un servidor para pgadmin en el browser fue creado, puerto 80 (localhost:80 || localhost).

Si la conexión se hace con el servidor web se tendrá que crear un servidor donde el host sea "postgres"ya que el contenedor de la BD se llama así y el username & contraseña será "root".

Si la conexión es via pgadmin desktop se creará un servidor pero el host será el 127.0.0.1 y las mismas credenciales.

#### GRAPHQL
