#!/bin/bash

openapi-generator generate -i http://localhost:63443/swagger/v1/swagger.json -g typescript-angular -o src/app/api/ --remove-operation-id-prefix --type-mappings Date=Date -t swagger/template -c swagger/swagger-config.json

cd ./src/app/

echo "Fixing toISOString..."
find  ./api -type f -name "*.ts" -print0 | xargs -0 sed -i "s/@Injectable({/import\ {\ toISOStringWithoutTimeZone\ }\ from\ \'app\/shared\/utils\/date-utils\';\n\n\@Injectable({/g"
find  ./api -type f -name "*.ts" -print0 | xargs -0 sed -i 's/start.toISOString()/toISOStringWithoutTimeZone(start)/g'
find  ./api -type f -name "*.ts" -print0 | xargs -0 sed -i 's/end.toISOString()/toISOStringWithoutTimeZone(end)/g'
find  ./api -type f -name "*.ts" -print0 | xargs -0 sed -i 's/startDate.toISOString()/toISOStringWithoutTimeZone(startDate)/g'
find  ./api -type f -name "*.ts" -print0 | xargs -0 sed -i 's/endDate.toISOString()/toISOStringWithoutTimeZone(endDate)/g'

echo "Done"
read -n 1 -p "Press any key to continue"
