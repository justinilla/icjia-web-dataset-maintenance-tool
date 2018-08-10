# Program
This section is prepared to provide the ICJIA staff responsible for maintaninig the program with a brief description of the program as well as each element of the package.

The Web Dataset Maintenance (WDM) Tool is a Python program using a custom Python package written specifically for fuctionalities required by the Tool. All Python scripts are located at `P:\DATA\CJIA_Webdata\python\`.

```
python/
├─ __main__.py
└─ webdatatools/
    ├─ __init__.py
    ├─ database.py
    ├─ intputtools.py
    ├─ outputtools.py
    ├─ population.py
    ├─ simplecount.py
    └─ ui.py
```

::: danger
Be careful when editing the program files for any reasons, including fixing bugs or adding new datasets. If necessary, you *must* first consult the original author (Bobae Kang) before implementing any changes.
:::

## `__main__.py`

This is a Python script for the main program. It consists of the `main()` function as well as other functions to implement the business logic of the WDM Tool.

The body of `main()` looks like the following:

```python
def main():
    reset_env(exit=False)
    welcome_msg = '\n### WELCOME TO ICJIA WEB DATASET MAINTENANCE TOOL ###' +\
        '\n\nYou can safely exit this program by typing "q" and press Enter' +\
        ' whenever asked for your input.' +\
        '\n***WARNING: Trying to forcibly quit the program might cause' +\
        ' unexpected problems.***' +\
        '\n'
    print(welcome_msg)
    while True:
        task_code = wd.ui.prompt_for_task_input()
        if task_code == '1':
            handle_task_result(task_simplecount())
        elif task_code == '2':
            handle_task_result(task_population())
        elif task_code == '3':
            handle_task_result(task_dataset())
```

`__main__.py` also defines supporting functions used in `main()` but not provided by the `webdatatools` package modules, including:

* `reset_env(exit=True)`: Reset the environment by cleaning out all temporary outputs. If the `exit` input is `True`, an exit message will be printed out at the end.
* `handle_task_result()`: Receive the task result and take appropriate actions based on the result (e.g. if success, print success message and ask whether to continue working on a new task).
* `taks_simplecount()`: Implement business logic for updating data for maintained datasets excluding population estimates. Return `True` if the task is successfully carried out, return `False` otherwise.
* `taks_population()`: Implement business logic for updating population estimates. Return `True` if the task is successfully carried out, return `False` otherwise.
* `taks_dataset()`: Implement business logic for generating packaged dataset products. Return `True` if the task is successfully carried out, return `False` otherwise.

## Package `webdatatools`
`webdatatools` is a custom package written to abstract away the practical details of the tasks carried out by the WDM Tool. In `__main__.py`, the package is imported at the beginning of the script using the following line:

```python
import webdatatools as wd
```

The package consists of six modules each of which implements a specific aspect of the WDM Tool's work as described below.

### Module `webdatatools.database`
This module offer functions to interact with the database file, `database.db`,
in the `@/database`. The module is intended to be imported and used by other
modules rather than directly imported by the main program.

The `webdatatools.database` module contians the the following public functions to be called externally:

* `init()` establishes connection to a SQLite database, `@/database/database.db`.
* `close()` closes database connection.
* `commit()` commits changes to the database.
* `execute_simple_sql` runs a simple sequel query without returning any output.
* `fetch_table()` fetches a table from the database.
* `create_temp()`creates a temporary table.
* `add_to_master()`appends a temporary table to the master table.
* `delete_temp()` deletes a temporary table.

### Module `webdatatools.inputtools`
This module offer functions to import user input files from the drive.
It must be noted that only one user input file should be in `@/input`
per use. If there are multiple files in `@/input`, the module will only see
the first file in the alphabetical order. The module depends on `webdatatools.database` module. 

The `webdatatools.intputtools` module contians the the following public functions to be called externally:

* `init()` initializes the `inputtools` module.
* `fetch_data()` reads in a user input file from `@/input`.

### Module `webdatatools.outputtools`
This module offer functions to generate outputs in the drive. The module depends on the `webdatatools.database` module functions.

The `webdatatools.outputtools` module contains the following public functions to be called externally:

* `init()` initializes the `outputtools` module.
* `create_temp()` creates a temporary table in `@/temp`.
* `delete_temp()` deletes temporary tables in `@/temp`.
* `generate_datasets()` generates multiple datasets in `@/dataset`.
* `generate_package()`
* `generate_packages_by_source_group()`

### Module `webdatatools.population` 
This module offer functions to automate the process of updating
the `Population` table in the database file, `@/database/database.db`. The module depends on `webdatatools.database`, `webdatatools.inputtools` and `webdatatools.outputtools` modules.

The `webdatatools.population` module contians the the following public functions to be called externally:

* `init()` initalizes the `population` module.
* `fetch_input_and_create_temp()` fetches input and create a temporary output.
* `finalize_update()` finalizes the process of updating the `Population` table.

### Module `webdatatools.simplecount`
This module offer functions to automate the process of updating
the `SimpleCount` table in the database file, `@/database/database.db`. The module depends on `webdatatools.database`, `webdatatools.inputtools` and `webdatatools.outputtools` modules.

The `webdatatools.simplecount` module contians the the following public functions to be called externally:

* `init()` initalizes the `simplecount` module.
* `fetch_input_and_create_temp()` fetches input and create a temporary output.
* `finalize_update()` finalizes the process of updating the `SimpleCount` table.

### Module `webdatatools.ui`
This module offer functions to prompt for and handle user inputs. The module depends on the `webdatatools.database` module.

The `webdatatools.ui` module contains the following public functions to be called externally:

* `prompt_for_task_input()` prompts the user for the task to carry out. 
* `prompt_for_confirmation()` prompts the user for confirmation for a specified content.
* `prompt_for_source_group_input()` prompt for user inputs for dataset source group..
* `prompt_for_data_source_input()` prompt for user inputs for dataset source to automatically update the database..
* `prompt_for_simplecount_input()` prompt for user inputs for updating method for simplecount estimates..
* `prompt_for_population_input()` prompt for user inputs for updating method for population estimates..
* `prompt_for_dataset_package_input()` prompt for user input for generating packaged output datasets.
* `prompt_for_new_task()` prompts for user input for continuing to carry out a new task.