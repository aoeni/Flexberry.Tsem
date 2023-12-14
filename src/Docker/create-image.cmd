docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tsem/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tsem/app ../..
