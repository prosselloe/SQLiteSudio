<h1><a href="SQLite Sudio</a></h1>
  <main>
    <label for='commands'>Enter some 
      <a href="https://www.w3schools.com/sql/default.asp">SQL</a></label> (
      <a href="https://www.w3schools.com/sql/sql_select.asp">SELECT</a>, 
      <a href="https://www.w3schools.com/sql/sql_update.asp">UPDATE</a>, 
      <a href="https://www.w3schools.com/sql/sql_delete.asp">DELETE</a>, 
      <a href="https://www.w3schools.com/sql/sql_insert.asp">INSERT INTO</a>, 
      <a href="https://www.w3schools.com/sql/sql_where.asp">WHERE</a>, 
      <a href="https://www.w3schools.com/sql/sql_orderby.asp">ORDER BY</a>, 
      <a href="https://www.w3schools.com/sql/sql_groupby.asp">GROUP BY</a>, 
      <a href="https://www.w3schools.com/sql/sql_having.asp">HAVING</a>, 
      <a href="https://www.w3schools.com/sql/sql_min_max.asp">MIN()</a>, 
      <a href="https://www.w3schools.com/sql/sql_count_avg_sum.asp">COUNT()</a>, 
      <a href="https://www.w3schools.com/sql/sql_join_inner.asp">INNER JOIN</a>, 
      <a href="https://www.w3schools.com/sql/sql_create_table.asp">TABLE</a> )

      DROP TABLE IF EXISTS employees;
      CREATE TABLE employees(id          integer,  name    text,
                             designation text,     manager integer,
                             hired_on    date,     salary  integer,
                             commission  float,    dept    integer);
 	    
      INSERT INTO employees VALUES (1,'JOHNSON','ADMIN',6,'1990-12-17',18000,NULL,4);
      INSERT INTO employees VALUES (2,'HARDING','MANAGER',9,'1998-02-02',52000,300,3);
      INSERT INTO employees VALUES (3,'TAFT','SALES I',2,'1996-01-02',25000,500,3);
      INSERT INTO employees VALUES (4,'HOOVER','SALES I',2,'1990-04-02',27000,NULL,3);
      INSERT INTO employees VALUES (5,'LINCOLN','TECH',6,'1994-06-23',22500,1400,4);
      INSERT INTO employees VALUES (6,'GARFIELD','MANAGER',9,'1993-05-01',54000,NULL,4);
      INSERT INTO employees VALUES (7,'POLK','TECH',6,'1997-09-22',25000,NULL,4);
      INSERT INTO employees VALUES (8,'GRANT','ENGINEER',10,'1997-03-30',32000,NULL,2);
      INSERT INTO employees VALUES (9,'JACKSON','CEO',NULL,'1990-01-01',75000,NULL,4);
      INSERT INTO employees VALUES (10,'FILLMORE','MANAGER',9,'1994-08-09',56000,NULL,2);
      INSERT INTO employees VALUES (11,'ADAMS','ENGINEER',10,'1996-03-15',34000,NULL,2);
      INSERT INTO employees VALUES (12,'WASHINGTON','ADMIN',6,'1998-04-16',18000,NULL,4);
      INSERT INTO employees VALUES (13,'MONROE','ENGINEER',10,'2000-12-03',30000,NULL,2);
      INSERT INTO employees VALUES (14,'ROOSEVELT','CPA',9,'1995-10-12',35000,NULL,1);

      SELECT designation,COUNT(*) AS nbr, (AVG(salary)) AS avg_salary FROM employees 
             GROUP BY designation ORDER BY avg_salary DESC;
      SELECT name,hired_on FROM employees 
             ORDER BY hired_on;
	
     <img src="Buttons.jpg" id="Buttons">
  </main>
<h1><a href="sql.db">SQL.db Default Database</a></h1>
<h1><a href="chinook.db">Chinook.db Sample Database</a></h1>
    <pre id="output"><table><thead><tr><th>name</th><th>sql</th></tr></thead><tbody><tr><td><button onclick="tabledata('SELECT * FROM albums;')">albums </button></td><td>CREATE TABLE "albums"
(
    [AlbumId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Title] NVARCHAR(160)  NOT NULL,
    [ArtistId] INTEGER  NOT NULL,
    FOREIGN KEY ([ArtistId]) REFERENCES "artists" ([ArtistId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM sqlite_sequence;')">sqlite_sequence </button></td><td>CREATE TABLE sqlite_sequence(name,seq)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM artists;')">artists </button></td><td>CREATE TABLE "artists"
(
    [ArtistId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Name] NVARCHAR(120)
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM customers;')">customers </button></td><td>CREATE TABLE "customers"
(
    [CustomerId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [FirstName] NVARCHAR(40)  NOT NULL,
    [LastName] NVARCHAR(20)  NOT NULL,
    [Company] NVARCHAR(80),
    [Address] NVARCHAR(70),
    [City] NVARCHAR(40),
    [State] NVARCHAR(40),
    [Country] NVARCHAR(40),
    [PostalCode] NVARCHAR(10),
    [Phone] NVARCHAR(24),
    [Fax] NVARCHAR(24),
    [Email] NVARCHAR(60)  NOT NULL,
    [SupportRepId] INTEGER,
    FOREIGN KEY ([SupportRepId]) REFERENCES "employees" ([EmployeeId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM employees;')">employees </button></td><td>CREATE TABLE "employees"
(
    [EmployeeId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [LastName] NVARCHAR(20)  NOT NULL,
    [FirstName] NVARCHAR(20)  NOT NULL,
    [Title] NVARCHAR(30),
    [ReportsTo] INTEGER,
    [BirthDate] DATETIME,
    [HireDate] DATETIME,
    [Address] NVARCHAR(70),
    [City] NVARCHAR(40),
    [State] NVARCHAR(40),
    [Country] NVARCHAR(40),
    [PostalCode] NVARCHAR(10),
    [Phone] NVARCHAR(24),
    [Fax] NVARCHAR(24),
    [Email] NVARCHAR(60),
    FOREIGN KEY ([ReportsTo]) REFERENCES "employees" ([EmployeeId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM genres;')">genres </button></td><td>CREATE TABLE "genres"
(
    [GenreId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Name] NVARCHAR(120)
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM invoices;')">invoices </button></td><td>CREATE TABLE "invoices"
(
    [InvoiceId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [CustomerId] INTEGER  NOT NULL,
    [InvoiceDate] DATETIME  NOT NULL,
    [BillingAddress] NVARCHAR(70),
    [BillingCity] NVARCHAR(40),
    [BillingState] NVARCHAR(40),
    [BillingCountry] NVARCHAR(40),
    [BillingPostalCode] NVARCHAR(10),
    [Total] NUMERIC(10,2)  NOT NULL,
    FOREIGN KEY ([CustomerId]) REFERENCES "customers" ([CustomerId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM invoice_items;')">invoice_items </button></td><td>CREATE TABLE "invoice_items"
(
    [InvoiceLineId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [InvoiceId] INTEGER  NOT NULL,
    [TrackId] INTEGER  NOT NULL,
    [UnitPrice] NUMERIC(10,2)  NOT NULL,
    [Quantity] INTEGER  NOT NULL,
    FOREIGN KEY ([InvoiceId]) REFERENCES "invoices" ([InvoiceId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY ([TrackId]) REFERENCES "tracks" ([TrackId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM media_types;')">media_types </button></td><td>CREATE TABLE "media_types"
(
    [MediaTypeId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Name] NVARCHAR(120)
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM playlists;')">playlists </button></td><td>CREATE TABLE "playlists"
(
    [PlaylistId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Name] NVARCHAR(120)
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM playlist_track;')">playlist_track </button></td><td>CREATE TABLE "playlist_track"
(
    [PlaylistId] INTEGER  NOT NULL,
    [TrackId] INTEGER  NOT NULL,
    CONSTRAINT [PK_PlaylistTrack] PRIMARY KEY  ([PlaylistId], [TrackId]),
    FOREIGN KEY ([PlaylistId]) REFERENCES "playlists" ([PlaylistId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY ([TrackId]) REFERENCES "tracks" ([TrackId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM tracks;')">tracks </button></td><td>CREATE TABLE "tracks"
(
    [TrackId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Name] NVARCHAR(200)  NOT NULL,
    [AlbumId] INTEGER,
    [MediaTypeId] INTEGER  NOT NULL,
    [GenreId] INTEGER,
    [Composer] NVARCHAR(220),
    [Milliseconds] INTEGER  NOT NULL,
    [Bytes] INTEGER,
    [UnitPrice] NUMERIC(10,2)  NOT NULL,
    FOREIGN KEY ([AlbumId]) REFERENCES "albums" ([AlbumId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY ([GenreId]) REFERENCES "genres" ([GenreId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY ([MediaTypeId]) REFERENCES "media_types" ([MediaTypeId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)</td></tr><tr><td><button onclick="tabledata('SELECT * FROM sqlite_stat1;')">sqlite_stat1 </button></td><td>CREATE TABLE sqlite_stat1(tbl,idx,stat)</td></tr></tbody></table>
    </pre>
  </main>
  <footer>
    Original work by kripken (<a href="https://github.com/sql-js/sql.js">sql.js</a>).
    C to Javascript compiler by kripken (<a href="https://github.com/kripken/emscripten">emscripten</a>).
    Project now maintained by <a href="https://github.com/lovasoa">lovasoa</a>
  </footer>
