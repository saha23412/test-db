# Dashboard

## Версия node v18.14.0

### Запуск проекта 
  1)Разделим терминал в vs code нажав на значок ![Image alt](https://github.com/saha23412/imgproj/raw/main/test1.jpg) или комбинация клавиш CTRL + SHIFT + 5  
  2)Зайдем в папку client и после этого установим зависимости командой npm i  
  3)Зайдем в папку server и после этого установим зависимости командой npm i   
  4)Откроем в терминале git bush  
  ![Image alt](https://github.com/saha23412/imgproj/raw/main/test2.jpg)   
  Введем команду psql -U postgres,затем введем пароль пользователя postgress(базовый пароль:root)  
  5)Затем введем команду CREATE DATABASE wallet , список sql запросов есть в папке server/database.sql  
  6)После проверим информацию о базе данных  
  ![Image alt](https://github.com/saha23412/imgproj/raw/main/test3.jpg)  
  пароль,название БД,пользователь,все должно быть точно установлено иначе мы не сможем подключиться к БД  
  7)Затем мы можем запускать проект , в папке server в терминале пишем команду npm run dev,затем в папке client пишем npm run dev  
   ![Image alt](https://github.com/saha23412/imgproj/raw/main/test4.jpg)  
   после этого sequelize создаст таблицу User и WalletUser  
   8)Затем переходим в git bush и заполняем данными эти таблицы  
   ![Image alt](https://github.com/saha23412/imgproj/raw/main/test5.jpg)   
   Список sql запросов есть в папке server/database.sql   
   9)После команды npm run dev в папке client появится локальный url по которому должен открыться проект  
   ![Image alt](https://github.com/saha23412/imgproj/raw/main/test6.jpg)   
   P.s вместо git bush можно использовать SQL Shell (psql)  
  #### Стек
  client: React,axios,react-router-dom,ag-grid-react,react-loader-spinner  
  server: Express,pg,nodemon
