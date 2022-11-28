  <h1>SQLite Sudio</h1>

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
    <br>

    <textarea id="commands">
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
    </textarea>

    <button id="execute" class="button">Execute</button>
    <button id='savedb' class="button">Save the db</button>
    <label class="button">Load an SQLite database file: <input type='file' id='dbfile'></label>

    <button id='tables' class="button">Tables</button>
    <button id='indexes' class="button">Indexes</button>
    <button id='relationships' class="button">Relationships</button>
       
    <div id="error" class="error"></div>

    <pre id="output">Results will be displayed here</pre>
  </main>

  <footer>
    Original work by kripken (<a href='https://github.com/sql-js/sql.js'>sql.js</a>).
    C to Javascript compiler by kripken (<a href='https://github.com/kripken/emscripten'>emscripten</a>).
    Project now maintained by <a href='https://github.com/lovasoa'>lovasoa</a>
  </footer>
