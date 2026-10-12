SET NUMERIC_ROUNDABORT OFF;
SET ANSI_PADDING, ANSI_WARNINGS, CONCAT_NULL_YIELDS_NULL, ARITHABORT,
   QUOTED_IDENTIFIER, ANSI_NULLS ON;
--Create view with schemabinding.
IF OBJECT_ID ('dbo.tf_users_count_mv', 'view') IS NOT NULL
   DROP VIEW dbo.tf_users_count_mv ;
GO

CREATE VIEW dbo.tf_users_count_mv
WITH SCHEMABINDING
   AS
   select CONVERT(DATE, TF_LAST_UPDATED_AT) TF_DATE,count(distinct TF_CREATED_BY) TOTAL_COUNT  from dbo.tf_messages group by CONVERT(DATE, TF_LAST_UPDATED_AT)
GO

commit

select * from dbo.tf_users_count_mv