:: ***************************************************************************
:: FILE: RENAME_MYSQLDB.BAT
:: ***************************************************************************
:: DESCRIPTION
:: This is a Windows /MS-DOS batch file that automates renaming a MySQL database 
:: by using MySQLDump, MySQLAdmin, and MySQL to perform the required tasks.
:: The MySQL\bin folder needs to be in your environment path or the working directory.
::
:: Syntax is rename_mysqldb database newdatabase -u [user] -p[password]
::
:: WARNING: The script will delete the original database, but only if it successfully
:: created the new copy. However, read the disclaimer below before using.
::
:: DISCLAIMER
:: This script is provided without any express or implied warranties whatsoever.
:: The user must assume the risk of using the script.
::
:: You are free to use, modify, and distribute this script without exception.
:: ***************************************************************************

:INITIALIZE
@ECHO OFF
IF [%2]==[] GOTO HELP
IF [%3]==[] (SET RDB_ARGS=--user=root) ELSE (SET RDB_ARGS=%3 %4 %5 %6 %7 %8 %9)
SET RDB_OLDDB=%1
SET RDB_NEWDB=%2
SET RDB_DUMPFILE=%RDB_OLDDB%_dump.sql
GOTO START

:START
SET RDB_STEP=1
ECHO Dumping "%RDB_OLDDB%"...
mysqldump %RDB_ARGS% %RDB_OLDDB% > %RDB_DUMPFILE%
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_ABORT
SET RDB_STEP=2
ECHO Creating database "%RDB_NEWDB%"...
mysqladmin %RDB_ARGS% create %RDB_NEWDB%
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_ABORT
SET RDB_STEP=3
ECHO Loading dump into "%RDB_NEWDB%"...
mysql %RDB_ARGS% %RDB_NEWDB% < %RDB_DUMPFILE%
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_ABORT
SET RDB_STEP=4
ECHO Dropping database "%RDB_OLDDB%"...
mysqladmin %RDB_ARGS% drop %RDB_OLDDB% --force
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_ABORT
SET RDB_STEP=5
ECHO Deleting dump...
DEL %RDB_DUMPFILE%
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_ABORT
ECHO Renamed database "%RDB_OLDDB%" to "%RDB_NEWDB%".
GOTO END

:ERROR_ABORT
IF %RDB_STEP% GEQ 3 mysqladmin %RDB_ARGS% drop %NEWDB% --force
IF %RDB_STEP% GEQ 1 IF EXIST %RDB_DUMPFILE% DEL %RDB_DUMPFILE%
ECHO Unable to rename database "%RDB_OLDDB%" to "%RDB_NEWDB%".
GOTO END

:HELP
ECHO Renames a MySQL database.
ECHO Usage: %0 database new_database [OPTIONS]
ECHO Options: Any valid options shared by MySQL, MySQLAdmin and MySQLDump.
ECHO          --user=root is used if no options are specified.
GOTO END    

:END
SET RDB_OLDDB=
SET RDB_NEWDB=
SET RDB_ARGS=
SET RDB_DUMP=
SET RDB_STEP=
