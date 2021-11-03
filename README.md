# Esimerkki sovellus testi

Esimerkki sovellus Node.js/Express.js REST APIsta, jossa tietokantana on MySQL.

## Sovelluksen asentaminen

Kloonaa repository eli siirry haluamaasi kansioon ja anna komento riviltä komennot
<ul>
<li>git clone https://github.com/tvt21kmo-bank-project/group_ope.git</li>
<li>cd group_ope</li>
<li>npm init</li>
</ul>
Tämän jälkeen sovellus käynnistyy komennolla <b>npm start</b>, mutta sitä ennen pitää luoda tietokanta ja sinne tunnus. Tietokannan voit luoda alla olevan ohjeen mukaan.

## Tietokannan luonti

Avaa mysql-client ja suorita komennot

<pre>
CREATE DATABASE netdb;
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL on netdb.* to 'netuser'@'localhost';

USE netdb;

CREATE TABLE book(
id_book INT primary key auto_increment,
name VARCHAR(255),
author VARCHAR(255),
isbn VARCHAR(20)
);

INSERT INTO book(name,author,isbn) VALUES('PHP Basic','Bob Jones','123-456-789-111-x');
INSERT INTO book(name,author,isbn) VALUES('Statistics','Lisa Smith','222-333-444-555-y');

CREATE TABLE user_table(
  id_user INT primary key auto_increment,
  username VARCHAR(20),
  password VARCHAR(255),
  UNIQUE (username)
);


CREATE TABLE borrower(
    id_borrower INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    streetAddress VARCHAR(30)
) ENGINE =InnoDB;
</pre>

## Environment variables

Tee sovelluksen juureen tiedosto <b>.env</b> ja kirjoita sinne rivit 
<pre>
authUser='newAdmin'
authPass='newPass'

MYSQL = "mysql://netuser:netpass@localhost:3306/netdb"
</pre>

## Responsen muotoiluja

response.json(dbResult); ->koko tietokannan tulos <br>

response.json(dbResult[0].username); ->pelkkä username lainausmerkeissä

response.send(dbResult[0].username); ->pelkkä username ilman lainausmerkkejä