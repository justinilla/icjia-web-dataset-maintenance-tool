# Data Sources

::: warning NOTE
Bold-font numbers in the rest of this section correspond to the ID value of the ``Indicator`` table in the database file.
:::

::: tip
See [the following "Database" section](./database.md) to learn more about the tables in the database file.
:::

## Admin. Office of the Illinois Courts
 Each year, AOIC publishes online [*Annual Report of the Illinois Courts*](http://www.illinoiscourts.gov/SupremeCourt/AnnReport.asp). Its *Statistical Summary* document contains data tables that are associated with multiple `SimpleCount` values. The following describes the connection between Statistical Summary tables and `SimpleCount` indicators:

* **Table: Felony Dispositions and Sentences by County Circuit Courts of Illinois**
    * **10**: `SENTENCES/PROBATION` value
    * **11**: sum of `SENTENCES/STATE IMPRISONMENT` and `SENTENCES/DEATH #` values.
    * **12**: `SENTENCES/DEATH #` value
    * **13**: `SENTENCES/OTHER` value
    * **40**: `TOTAL CONVICTED` value
    * **41**: `TOTAL NUMBER OF DEFENDANTS` value

* **Table: Criminal and Quasi-Criminal Caseload Statistics by County Circuit Courts of Illinois**
    * **20**: `New filed` value of `CRIMINAL/FELONY` column
    * **21**: `New filed` value of `CRIMINAL/MISDEMEANOR` column
    * **22**: `New filed` value of `CRIMINAL/DUI` column
    * **29**: `New filed` value of `CRIMINAL/TOTAL ALL CASES` column

* **Table: Active Adult Caseload**
    * **30**: `Felony` value
    * **31**: `Misd.` value
    * **32**: `DUI` value
    * **33**: `Traffic` value
    * **34**: `Admin.` value
    * **39**: `Total` value

* **Table: Civil and Domestic Relations Caseload Statistics by County Circuit Courts of Illinois**
    * **50**: `DOMESTIC RELATIONS/ORDER OF PROTECTION` value

* **Table: Juvenile Petitions Continued Under Supervision/Adjudications**
    * **100**: `Continued Under Supervision/Delinquency` value
    * **101**: *Discontinued*
    * **102**: *Discontinued*
    * **103**: `Continued Under Supervision/Truancy` value
    * **120**: `Adjudications/Delinquency` value
    * **121**: *Discontinued*
    * **122**: *Discontinued*
    * **123**: `Adjudications/Truancy` value

* **Table: Juvenile Caseload Statistics by County Circuit Courts of Illinois**
    * **110**: `New filed` value of `DELINQUENCY` column
    * **111**: `New filed` value of `ABUSE & NEGLECT` column
    * **112**: `New filed` value of `OTHER` column

* **Table: Juvenile Placements**
    * **130**: sum of `Place in Foster Home/In State` and `Place in Foster Home/Out of State` values
    * **131**: sum of `Placed in Group Home/In State` and `Placed in Group Home/Out of State` values
    * **132**: sum of `Placed in Treatment/In State` and `Placed in Treatment/Out of State` values
    * **133**: sum of `Placed in Relative/In State` and `Placed in Relative/Out of State` values

* **Table: Active Juvenile Caseload**
    * **140**: `Probation` value
    * **141**: `Supervision` value
    * **142**: `CUS` value
    * **143**: `Informal` value
    * **144**: `Admin.` value
    * **145**: `Other` value

* **Table: Juvenile Investigations Report**
    * **150**: `Social History` value
    * **151**: `Supplemental Social Hist.` value
    * **152**: `Intake Screening` value
    * **153**: `Other` value


## R&A Microsoft SQL Server
The following data are drawn from ICJIA R&A's Microsoft SQL Server (`SPAC2SRV`) databases. If you are curious about the SQL Server databases, contact Ernst Melchoir (Computer Support Specialist, [Ernst.Melchior@illinois.gov](mailto:Ernst.Melchior@illinois.gov)) for more information.

### Criminal History Record Information (CHRI)
The latest CHRI data pulled from the live server are stored in an ICJIA R&A's Microsoft SQL Server database, named `AnnualPulls`.

* **Table `AnnualPulls.dbo.Arrests`**
    * **4000**: aggregated count of rows filtered by the age


### Illinois Department of Corrections (IDOC)
The latest IDOC data are stored in an ICJIA R&A's Microsoft SQL Server (`SPAC2SRV`) database, named `PrisonMain`.

* **Table `PrisonMain.dbo.PrisonAdmits`**
    * **1600**: aggregated counts of rows with `ADMTYPO3 == 1`
    * **1601**: aggregated counts of rows with `ADMTYPO3 == 2`
    * **1602**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE == 1`
    * **1603**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE == 2`
    * **1604**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE == 4`
    * **1605**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE == 3`
    * **1606**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE == 7`
    * **1607**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE3 == 1`
    * **1608**: aggregated counts of rows with `ADMTYPO3 == 1` and  `OFFTYPE3 == 2`
    * **1620**: aggregated counts of rows with `ADMTYPO3 == 1` and  `SEX != F`
    * **1621**: aggregated counts of rows with `ADMTYPO3 == 1` and  `SEX == F`

::: warning NOTE
Aggregating `PrisonAdmits` counts is based on fiscal years. Use the `FiscalYr` values for this.
:::

### Illinois Department of Juvenile Justice (IDJJ)
The latest IDJJ data are stored in an ICJIA R&A's Microsoft SQL Server (`SPAC2SRV`) database, named `PrisonMain`.

* **Table `PrisonMain.dbo.IDJJ_Admissions`**
    * **701**: aggregated counts of rows with `Age in (13,16)` and `admtypo in (CE,CER,DR,IC,MVN,PVN,RAM)`
    * **702**: aggregated counts of rows with `Age in (13,16)` and `admtypo == CE`
    * **703**: aggregated counts of rows with `Age in (13,16)` and `admtypo in (TMV,TPV)`
    * **704**: aggregated counts of rows with `Age in (17,20)` and `admtypo in (CE,CER,DR,IC,MVN,PVN,RAM)`
    * **705**: aggregated counts of rows with `Age in (17,20)` and `admtypo == CE`
    * **706**: aggregated counts of rows with `Age in (17,20)` and `admtypo in (TMV,TPV)`
    * **710**: aggregated counts of rows in **701** where `sex == M`
    * **711**: aggregated counts of rows in **701** where `sex != M`
    * **712**: aggregated counts of rows in **704** where `sex == M`
    * **713**: aggregated counts of rows in **704** where `sex != M`
    * **720**: aggregated counts of rows in **701** where `race == WHI`
    * **721**: aggregated counts of rows in **701** where `race == BLK`
    * **722**: aggregated counts of rows in **701** where `race == HSP`
    * **723**: aggregated counts of rows in **704** where `race == WHI`
    * **724**: aggregated counts of rows in **704** where `race == BLK`
    * **725**: aggregated counts of rows in **704** where `race == HSP`
    * **730**: aggregated counts of rows in **701** where `OFFTYPE9 == 1` 
    * **731**: aggregated counts of rows in **701** where `OFFTYPE9 == 2`
    * **732**: aggregated counts of rows in **701** where `OFFTYPE9 == 3`
    * **733**: aggregated counts of rows in **701** where `OFFTYPE9 == 4`
    * **734**: aggregated counts of rows in **701** where `OFFTYPE9 == 5`
    * **735**: aggregated counts of rows in **704** where `OFFTYPE9 == 1` 
    * **736**: aggregated counts of rows in **704** where `OFFTYPE9 == 2`
    * **737**: aggregated counts of rows in **704** where `OFFTYPE9 == 3`
    * **738**: aggregated counts of rows in **704** where `OFFTYPE9 == 4`
    * **739**: aggregated counts of rows in **704** where `OFFTYPE9 == 5`
    * **740**: aggregated counts of rows in **701** where `hclass in (M,X,1,2,3,4)`
    * **741**: aggregated counts of rows in **701** where `hclass not in (M,X,1,2,3,4)`
    * **742**: aggregated counts of rows in **704** where `hclass in (M,X,1,2,3,4)`
    * **743**: aggregated counts of rows in **704** where `hclass not in (M,X,1,2,3,4)`

* **Table`PrisonMain.dbo.IDJJ_Exits`**
    * **751**: aggregated counts of rows with `ExitAge in (13,16)` and `admtypo in (CE,CER,DR,IC,MVN,PVN,RAM)`
    * **752**: aggregated counts of rows with `ExitAge in (13,16)` and `admtypo == CE`
    * **753**: aggregated counts of rows with `ExitAge in (13,16)` and `admtypo in (TMV,TPV)`
    * **754**: aggregated counts of rows with `ExitAge in (17,20)` and `admtypo in (CE,CER,DR,IC,MVN,PVN,RAM)`
    * **755**: aggregated counts of rows with `ExitAge in (17,20)` and `admtypo == CE`
    * **756**: aggregated counts of rows with `ExitAge in (17,20)` and `admtypo in (TMV,TPV)`
    * **760**: aggregated counts of rows in **751** where `sex == M`
    * **761**: aggregated counts of rows in **751** where `sex != M`
    * **762**: aggregated counts of rows in **754** where `sex == M`
    * **763**: aggregated counts of rows in **754** where `sex != M`
    * **770**: aggregated counts of rows in **751** where `race == WHI`
    * **771**: aggregated counts of rows in **751** where `race == BLK`
    * **772**: aggregated counts of rows in **751** where `race == HSP`
    * **773**: aggregated counts of rows in **754** where `race == WHI`
    * **774**: aggregated counts of rows in **754** where `race == BLK`
    * **775**: aggregated counts of rows in **754** where `race == HSP`
    * **780**: aggregated counts of rows in **751** where `OFFTYPE9 == 1`
    * **781**: aggregated counts of rows in **751** where `OFFTYPE9 == 2`
    * **782**: aggregated counts of rows in **751** where `OFFTYPE9 == 3`
    * **783**: aggregated counts of rows in **751** where `OFFTYPE9 == 4`
    * **784**: aggregated counts of rows in **751** where `OFFTYPE9 == 5`
    * **785**: aggregated counts of rows in **754** where `OFFTYPE9 == 1`
    * **786**: aggregated counts of rows in **754** where `OFFTYPE9 == 2`
    * **787**: aggregated counts of rows in **754** where `OFFTYPE9 == 3`
    * **788**: aggregated counts of rows in **754** where `OFFTYPE9 == 4`
    * **789**: aggregated counts of rows in **754** where `OFFTYPE9 == 5`
    * **790**: aggregated counts of rows in **751** where `hclass in (M,X,1,2,3,4)`
    * **791**: aggregated counts of rows in **751** where `hclass not in (M,X,1,2,3,4)`
    * **792**: aggregated counts of rows in **754** where `hclass in (M,X,1,2,3,4)`
    * **793**: aggregated counts of rows in **754** where `hclass not in (M,X,1,2,3,4)`

::: warning NOTE
Aggregating `IDJJ_Admissions` and `IDJJ_Exits` counts is based on fiscal years. Use the `SFY` values for this. 
:::

## Illinois Dept. of Corrections - Other
Jail and Detention Standards data are obtained directly from the source via email and stored in `P:/DATA/JAIL/`. Use data in `yyyy ICJIA County SUP Totals.xls` files. Some of the old data come from `Jailpop.xls`. Cook county has a separate data source: [CAFR](https://www.cookcountyil.gov/service/financial-reports).

* **1500**: sum of `TOTAL Number of Bookings` per county 
* **1510**: average of `Average Monthly Pop` per county
* **1520**: not collected

## Illinois State Police

### Uniform Crime Reports
The State Police releases annual Uniform Crime Reports [here](http://www.isp.state.il.us/crime/ucrhome.cfm). Currently, each year's report comes with four datasets.

* **File: Index Crime Offense & Drug Arrest Data**
    * **1400**: `Acca##` value
    * **1401**: `Acsa##` value
    * **1402**: `Ahsna##` value
    * **1403**: `Adpa##` value
    * **1404**: `Ameth##` value
    * **1410**: `CH##` value
    * **1411**: `Rape##` value
    * **1412**: `Rob##` value
    * **1413**: `AggBA##` value
    * **1414**: `ACH##` value
    * **1415**: `Arape##` value
    * **1416**: `Arob##` value
    * **1417**: `AAggBA##` value
    * **1420**: `Theft##` value
    * **1421**: `Burg##` value
    * **1422**: `MVT##` value
    * **1423**: `Arson##` value
    * **1424**: `Atheft##` value
    * **1425**: `Aburg##` value
    * **1426**: `Amvt##` value
    * **1427**: `Aarson##` value
    * **1430**: `HTsex##` value
    * **1431**: `HTserve16##` value
    * **1440**: `aHTsex##` value
    * **1441**: `aHTserve##` value

* **File: Domestic Offenses Data**
    * **1100**: `Domestic##` value

* **File: Hate Crime Incidents Data**
    * **1130**: `Hate##` value

* **File: School Incidents Data**
    * **1110**: *Discontinued as of 2014*
    * **1120**: Sum of `ch##`, `csa##`, `aggbatt##`, `batt##`, `aggasslt##`, `assault##`, and `intimidate##` values

::: warning NOTE
`##` in the column names represent the last two digits of the latest year.
:::

### Drug seizures and submissions
Drug seizures and submissions data are obtained directly from the source via email and stored in `P:/DATA/DRUG/`. In particular, the original data files are stored in a subdirectory, `./Miscellany/Monthly drug lab submissions by county/`. Contact Idetta Phillips (Research Analyst, [Idetta.Phillips@illinois.gov](mailto:Idetta.Phillips@Illinois.gov)) for more information.

* **File: SPIntell mmyy.dbf**
    * **1700**: Sum of `WEIGHT` values where `DRUGNAME` is `Cannabis`
    * **1701**: Sum of `ENTRIES` values where `DRUGNAME` is `Cannabis`
    * **1705**: Sum of `WEIGHT` values where `DRUGNAME` is `Cocaine`
    * **1706**: Sum of `ENTRIES` values where `DRUGNAME` is `Cocaine`
    * **1710**: *Discontinued*
    * **1711**: *Discontinued*
    * **1715**: Sum of `WEIGHT` values where `DRUGNAME` is `Heroin`
    * **1716**: Sum of `ENTRIES` values where `DRUGNAME` is `Heroin`
    * **1720**: Sum of `WEIGHT` values where `DRUGNAME` is `Methamphetamine`
    * **1721**: Sum of `ENTRIES` values where `DRUGNAME` is `Methamphetamine`
    * **1725**: Sum of `WEIGHT` values where `DRUGNAME` not in the specified ones
    * **1726**: Sum of `ENTRIES` values where `DRUGNAME` not in the specified ones
    * **1727**: Sum of `WEIGHT` values where `DRUGNAME` in (`Amphetamine`, `Methamphetamine`)

## Other sources

### Illinois Board of Education
Indicators **800** through **842** are discontinued.

### Illinois Department of Againg
Historical elder abuse data are obtained directly from the source via email and stored in `P:/DATA/Elder Abuse/`. This dataset has not been updated for a while and may be discontinued in future.

* **1140**: Value for the relevant year.

### Illinois Department of Children and Family Services
Child abuse related data are drawn from [Child Abuse and Neglect Statistics by Illinois Department of Children and Family Services](https://www2.illinois.gov/dcfs/aboutus/newsandreports/reports/Pages/default.aspx), especially tables 7, 8, 19, 20 of the Annual Statistical Report. Children is defined as age <= 17. See the latest example, [the fiscal year 2015 report](https://www2.illinois.gov/dcfs/aboutus/newsandreports/Documents/DCFS_Annual_Statistical_Report_FY2015.pdf).

* **Table 7: County Distribution of Alleged Victims of Abuse and Neglect**
    * **600**: `Number Children` value

* **Table 8: County Distribution of Indicated Victims of Abuse and Neglect**
    * **601**: `Number Children` value

* **Table 19: County Distribution of Alleged Victims of Sexual Abuse**
    * **602**: `Number Children Reported` value

* **Table 20: County Distribution of Alleged Victims of Sexual Abuse**
    * **603**: `Number Children` value

### Illinois Department of Employment
County-level unemployment data are drawn from [Local Area Unemployment Statistics (LAUS)](http://www.ides.illinois.gov/LMI/Pages/Local_Area_Unemployment_Statistics.aspx) by the Illinois Department of Employment. See the latest example, [2017 report](http://www.ides.illinois.gov/LMI/Local%20Area%20Unemployment%20Statistics%20LAUS/historical/2017-moaa.xls).

* **Local Area Unemployment Statistics Table**
    * **1030**: `LABOR FORCE` value where `MONTH#` is 13 (annual average)
    * **1550**: `EMPLOYED` value where `MONTH#` is 13 (annual average)
    * **1551**: `UNEMPLOYED NUMBER` value where `MONTH#` is 13 (annual average)

### Illinois Department of Human Services
Indicators **1210**, **1220** and **1229** are discontinued.

### National Vital Statistics System:
The "Population" table records are drawn from [U.S. Census Populations With Bridged Race Categories](https://www.cdc.gov/nchs/nvss/bridged_race.htm) by the National Vital Statistics System. The data files are also available on <a href="ftp://ftp.cdc.gov/pub/Health_Statistics/NCHS/Datasets/NVSS/bridgepop/">the Center for Disease Control and Prevension FTP server</a>.

### U.S. Census Bureau
Illinois poverty estimates data are drawn from [Small Area Income and Poverty Estimates (SAIPE)](https://www.census.gov/programs-surveys/saipe.html). The actual datasets can be found [here](https://www2.census.gov/programs-surveys/saipe/datasets/). Also, see the layout [documentation](https://www2.census.gov/programs-surveys/saipe/technical-documentation/file-layouts/state-county/2016-estimate-layout.txt) for more information.

* **File: /yyyy/yyyy-state-and-county/estyy-il.txt**
    * **1200**: characters 8-15 (Estimate of people of all ages in poverty)
    * **1201**: characters 50-57 (Estimate of people age 0-17 in poverty)