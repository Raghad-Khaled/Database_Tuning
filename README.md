<div align="center">

<H1>
ð Database Tuning
</H1>

<img src="images\database.png" alt="logo"  />

</div>

## ð Introduction

We experiment with the different concepts of database tuning and the different techniques used like:
<ul>
<li> Optimizing the schema. </li>
<li> Optimizing the memory requirements. </li>
<li> Optimizing the queries. </li>
<li> Testing the performance of MySQL vs MongoDB.</li>
<ul>

## ð Database Schema

![ERD](./images/Newse.PNG)

## ð Results

### MySQL Performance

![mysql](./images/Figure_2.png)

### MySQL vs MongoDB Performance

![mongo-vs-mysql](./images/Figure_1.PNG)

### Effects of combine all optimizations 

![mongo-vs-mysql](./images/optimization.PNG)

## ð Conclusion

- Query optimization has an effect when the DBMS didnât optimize the query and reorder the join to get min cost.

- Index the table reduces the time for selection and grouping by on the value which has the index,  also when joining on the foreign key it reduces the time when there is an index.

- Increasing the buffer pool increases the number of pages cached in the buffer pool which reduces the time of the query.


### ð For more details check the [report](./2_report.pdf)