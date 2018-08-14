(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(e,t,i){e.exports=i.p+"assets/img/sqlitebrowser_logo.deb3aa26.png"},167:function(e,t,i){e.exports=i.p+"assets/img/database_1.ac7ab821.png"},192:function(e,t,i){"use strict";i.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[this._v("#")]),this._v(" Database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sqlite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlite","aria-hidden":"true"}},[this._v("#")]),this._v(" SQLite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("em",[this._v('"SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. [...] SQLite is the most widely deployed database in the world with more applications than we can count, including several high-profile projects."')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"db-browser-for-sqlite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-browser-for-sqlite","aria-hidden":"true"}},[this._v("#")]),this._v(" DB Browser for SQLite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(166),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("em",[this._v('"DB Browser for SQLite is a high quality, visual, open source tool to create, design, and edit database files compatible with SQLite."')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once DB Browser is downloaded and installed, you can use it to open SQLite database file ("),t("code",[this._v(".db")]),this._v("). The following screenshot image shows the graphical user interface to a "),t("code",[this._v(".db")]),this._v(" file:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(167),alt:"Screenshot of DB for SQLite GUI"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables","aria-hidden":"true"}},[this._v("#")]),this._v(" Tables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The WDM Tool's data is stored in the "),t("code",[this._v("/database/database.db")]),this._v(" file, which contains a number of tables described in the rest of this section.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("The WDM Tool's database structure is drawn from the one used in the previous datasets maintenance practice. Accoringly, there are tables or columns that appear somewhat redundant or unused. This may change in future.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"combinedcounty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#combinedcounty","aria-hidden":"true"}},[this._v("#")]),this._v(' "CombinedCounty"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("id")]),e._v(" (INTEGER): Unique indentifier for combined county records.")]),e._v(" "),i("li",[i("code",[e._v("fk_combinedcounty_indicator")]),e._v(' (INTEGER): A foreign key to the "Indicator" table.')]),e._v(" "),i("li",[i("code",[e._v("year")]),e._v(" (INTEGER): Year when the given combined county record is applicable.")]),e._v(" "),i("li",[i("code",[e._v("fk_container_county")]),e._v(' (INTEGER): A foreign key to the "County" table for the reporting county.')]),e._v(" "),i("li",[i("code",[e._v("fk_contained_county")]),e._v(' (INTEGER): A foreign key to the "County" table for the county reporting its data via another county.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"county"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#county","aria-hidden":"true"}},[this._v("#")]),this._v(' "County"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("id")]),e._v(" (INTEGER): Unique identifier for each county.")]),e._v(" "),i("li",[i("code",[e._v("fips_number")]),e._v(" (REAL): The Federal Information Process Standard (FIPS) number for each county.")]),e._v(" "),i("li",[i("code",[e._v("county_name")]),e._v(" (TEXT): County name.")]),e._v(" "),i("li",[i("code",[e._v("judicial_circuit")]),e._v(" (TEXT): The Illinois circuit court under whose jurisdiction each  county falls.")]),e._v(" "),i("li",[i("code",[e._v("fk_county_geography")]),e._v(' (REAL): A foreign key to the "Geography" table.')]),e._v(" "),i("li",[i("code",[e._v("alphabetical_oder")]),e._v(" (REAL): The number of each county in alphebetical order.")]),e._v(" "),i("li",[i("code",[e._v("region")]),e._v(" (TEXT): Region of the county: Northern minus Cook, Northern - Cook, Central, or Southern")]),e._v(" "),i("li",[i("code",[e._v("community_type")]),e._v(' (TEXT): Categorization based on the proportion of rural area in a county: 1) "Completely Rural" means 100% rural,  2) "Mostly rural" means >50% rural, 3) "Mostly urban" means <50% rural, and 4) "Completely urban" means 0% rural')]),e._v(" "),i("li",[i("code",[e._v("percent_rural")]),e._v(" (REAL): Percentage of rural area in a county")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"geography"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geography","aria-hidden":"true"}},[this._v("#")]),this._v(' "Geography"')])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("id")]),this._v(" (INTEGER): Unique indentifier for each geography type.")]),this._v(" "),t("li",[t("code",[this._v("description")]),this._v(" (TEXT): Description of each geography type.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"indicator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indicator","aria-hidden":"true"}},[this._v("#")]),this._v(' "Indicator"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("id")]),e._v(" (INTEGER): Unique identifier for each indicator.")]),e._v(" "),i("li",[i("code",[e._v("description")]),e._v(" (TEXT): Description of each indicator.")]),e._v(" "),i("li",[i("code",[e._v("source")]),e._v(" (TEXT):")]),e._v(" "),i("li",[i("code",[e._v("note")]),e._v(" (TEXT): Internal note for each indicator.")]),e._v(" "),i("li",[i("code",[e._v("public_note")]),e._v(" (BLOB): Public note for each indicator.")]),e._v(" "),i("li",[i("code",[e._v("adult_or_juvenile")]),e._v(' (TEXT): "A" if the given indicator is applicable to adults only, "J" if applicable to juveniles only, "B" if both.')]),e._v(" "),i("li",[i("code",[e._v("fk_indicator_population_indicator")]),e._v(' (REAL): A foreign key to the "PopulationOld" table.')]),e._v(" "),i("li",[i("code",[e._v("fk_indicator_ratedivisor")]),e._v(' (REAL): A foreign key to the "RateDivisor" table.')]),e._v(" "),i("li",[i("code",[e._v("fk_indicator_output")]),e._v(' (REAL): A foreign key to the "Output" table.')]),e._v(" "),i("li",[i("code",[e._v("name")]),e._v(" (TEXT): Name of each indicator.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note","aria-hidden":"true"}},[this._v("#")]),this._v(' "Note"')])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("id")]),this._v(" (INTEGER): Unique identifier for each note.")]),this._v(" "),t("li",[t("code",[this._v("note_text")]),this._v(" (TEXT): Body text of each note.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[this._v("#")]),this._v(' "Output"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("id")]),e._v(" (INTEGER): Unique identifier for each output table.")]),e._v(" "),i("li",[i("code",[e._v("source_group")]),e._v(" (INTEGER): Source group of each output table: 1 is AOIC, 2 is CHRI, 3 is IDOC, 4 is IDJJ, 5 is ISP, and 6 is others.")]),e._v(" "),i("li",[i("code",[e._v("name")]),e._v(" (TEXT): Name of each output table (as in the resulting "),i("code",[e._v(".csv")]),e._v(" file).")]),e._v(" "),i("li",[i("code",[e._v("old_name")]),e._v(" (TEXT): Name of each output table as in the previous dataset maintenance system.")]),e._v(" "),i("li",[i("code",[e._v("standard")]),e._v(" (INTEGER): 1 if the table is in the standard format, 0 otherwise.")]),e._v(" "),i("li",[i("code",[e._v("active")]),e._v(" (INTEGER): 1 if the table is actively maintained, 0 otherwise.")]),e._v(" "),i("li",[i("code",[e._v("fk_output_package")]),e._v(' (INTEGER): A foreign key to the "Package" table.')]),e._v(" "),i("li",[i("code",[e._v("name_full")]),e._v(" (TEXT): Full name of each output table; included in the metadata.")]),e._v(" "),i("li",[i("code",[e._v("source")]),e._v(" (TEXT): Output data source.")]),e._v(" "),i("li",[i("code",[e._v("year_type")]),e._v(" (TEXT): Type of year: Calandar or Fiscal; included in the metadata.")]),e._v(" "),i("li",[i("code",[e._v("year_min")]),e._v(" (REAL): Minimum year value (for the earliest records); included in the metadata.")]),e._v(" "),i("li",[i("code",[e._v("year_max")]),e._v(" (REAL): Maximum year value (for the latest records); included in the metadata.")]),e._v(" "),i("li",[i("code",[e._v("description")]),e._v(" (TEXT): Description of each output; included in the metadata.")]),e._v(" "),i("li",[i("code",[e._v("notes")]),e._v(" (TEXT): Notes for each output; included in the metadata file.")]),e._v(" "),i("li",[i("code",[e._v("column_name")]),e._v(" (TEXT): A list of column names; included in the metadata.")]),e._v(" "),i("li",[i("code",[e._v("column_info")]),e._v(" (TEXT): A list of column descriptions; included in the metadata.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package","aria-hidden":"true"}},[this._v("#")]),this._v(' "Package"')])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("id")]),this._v(" (INTEGER): Unique identifier for each packaged dataset output.")]),this._v(" "),t("li",[t("code",[this._v("name")]),this._v(" (TEXT): Name for each packaged dataset output.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"population"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#population","aria-hidden":"true"}},[this._v("#")]),this._v(' "Population"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("year")]),e._v(" (INTEGER): Year of each record.")]),e._v(" "),i("li",[i("code",[e._v("fk_population_county")]),e._v(' (INTEGER): A foreign key to the "County" table.')]),e._v(" "),i("li",[i("code",[e._v("age")]),e._v(" (INTEGER): .")]),e._v(" "),i("li",[i("code",[e._v("race_gender")]),e._v(" (INTEGER): .")]),e._v(" "),i("li",[i("code",[e._v("hispanic")]),e._v(" (INTEGER): .")]),e._v(" "),i("li",[i("code",[e._v("value")]),e._v(" (INTEGER): Data value.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"populationold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#populationold","aria-hidden":"true"}},[this._v("#")]),this._v(' "PopulationOld"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("fk_population_county")]),e._v(' (INTEGER): A foreign key to the "County" table.')]),e._v(" "),i("li",[i("code",[e._v("year")]),e._v(" (INTEGER): Year of each record.")]),e._v(" "),i("li",[i("code",[e._v("fk_population_indicator")]),e._v(' (INTEGER): A foreign key to the "Indicator" table.')]),e._v(" "),i("li",[i("code",[e._v("value")]),e._v(" (INTEGER): Data value.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ratedivisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ratedivisor","aria-hidden":"true"}},[this._v("#")]),this._v(' "RateDivisor"')])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("id")]),this._v(" (INTEGER): Unique identifier for each rate divisor type.")]),this._v(" "),t("li",[t("code",[this._v("description")]),this._v(" (TEXT): Description of each rate divisor type.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"simplecount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simplecount","aria-hidden":"true"}},[this._v("#")]),this._v(' "SimpleCount"')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("fk_simplecount_indicator")]),e._v(' (INTEGER): A foreign key to the "Indicator" table.')]),e._v(" "),i("li",[i("code",[e._v("fk_simplecount_county")]),e._v(' (INTEGER): A foreign key to the "County" table.')]),e._v(" "),i("li",[i("code",[e._v("year")]),e._v(" (INTEGER): Year of each record.")]),e._v(" "),i("li",[i("code",[e._v("value")]),e._v(" (REAL): Data value.")])])}],o=i(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The Web Dataset Maintenance (WDM) Tool uses SQLite to build\nSQLite is freely available at "),i("a",{attrs:{href:"https://www.sqlite.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official SQLite website"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("Although a SQLite database file can be accessed and modified programmatically, it is still conveninent to use a graphical tool to browse the database file and make minor changes if needed.")]),e._v(" "),i("p",[e._v("For that, the current documentation recommends DB Browser for SQLite, previously known as SQLite Browser, for a graphical user interface software tool providing a to SQLite database files. It is freely downloadable from "),i("a",{attrs:{href:"https://sqlitebrowser.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("its official website"),i("OutboundLink")],1),e._v(", which introduces DB Browser for SQLite as follows:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("To find more about hwo to use the DB Browser for SQLite, visit "),i("a",{attrs:{href:"https://github.com/sqlitebrowser/sqlitebrowser/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("its official documentation Wiki pages on GitHub"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),i("p",[e._v('The "CombinedCounty" table contains information regarding cases in which data for multiple counties are reported by a single county or a separate body of organization.')]),e._v(" "),i("p",[e._v('The "CombinedCounty" table has the following columns:')]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),i("p",[e._v('The "County" table contains information on Illinois counties and their characteristics.')]),e._v(" "),i("p",[e._v('The "County" table has the following columns:')]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),i("p",[e._v('The "Geography" table contains information on geography type variable and their definitions.')]),e._v(" "),i("p",[e._v('The "Geography" table has the following columns:')]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),i("p",[e._v('The "Indicator" table contains information about each "indicator", a unique idenetifier for a specific variable whose records are collected by the ICJIA and incoporated into its published datasets. For instance, the indicator number of 100 corresponds to Continued Under Supervision/Delinquency variable in the Juvenile Petitions Continued Under Supervision/Adjudications table of the Administration Office of the Illinois Courts\' Annual Report of the Illinois Courts.')]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),i("p",[e._v("See "),i("router-link",{attrs:{to:"./source.html"}},[e._v('the previous "Data Sources" section')]),e._v(" for the link between indicator values and their sources.")],1)]),e._v(" "),i("p",[e._v('The "Indicator table has the following columns:')]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),i("p",[e._v('The "Note" table contains notes from the previous dataset maintenance system.')]),e._v(" "),i("p",[e._v('The "Note" table has the following columns:')]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),i("p",[e._v('The "Output" table contains information about each output data file, especially the information that will be saved as a metadata file.')]),e._v(" "),i("p",[e._v('The "Output" table has the following columns:')]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),i("p",[e._v('The "Package" table has the following columns:')]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),i("p",[e._v('The "Population" table contains population records drawn from '),i("a",{attrs:{href:"https://www.cdc.gov/nchs/nvss/bridged_race.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("U.S. Census Populations With Bridged Race Categories"),i("OutboundLink")],1),e._v(" by the National Vial Statistics System. The records are in a disaggregated format--by year, county, bridged race group and gender, ethnicity (hispanic or not), and age--as in the original format. Records in this table are used for obtaining the population base for calculating the relevant rates in the dataset outputs.")]),e._v(" "),i("p",[e._v('The "Population" table has the following columns:')]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),i("p",[e._v('The "PopulationOld" table contains population records drawn from '),i("a",{attrs:{href:"https://www.cdc.gov/nchs/nvss/bridged_race.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("U.S. Census Populations With Bridged Race Categories"),i("OutboundLink")],1),e._v(" by the National Vial Statistics System--in an old, aggregated format. The table is no longer maintained beyond the 2016 population estimates.")]),e._v(" "),i("p",[e._v('The "PopulationOld" table has the following columns:')]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),i("p",[e._v('The "RateDivisor" table contains information about how to calculate the rate for each data variable.')]),e._v(" "),i("p",[e._v('The "RateDivisor" table has the following columns:')]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),i("p",[e._v('The "SimpleCount" table is a storage for all the actual values from data sources except for the population estimates.')]),e._v(" "),i("p",[e._v('The "SimpleCount" table has the following columns:')]),e._v(" "),e._m(33)])},a,!1,null,null,null);r.options.__file="database.md";t.default=r.exports}}]);