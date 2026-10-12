SET NUMERIC_ROUNDABORT OFF;
SET ANSI_PADDING, ANSI_WARNINGS, CONCAT_NULL_YIELDS_NULL, ARITHABORT,
   QUOTED_IDENTIFIER, ANSI_NULLS ON;
--Create view with schemabinding.
IF OBJECT_ID ('dbo.tf_bot_msg_count_mv', 'view') IS NOT NULL
   DROP VIEW dbo.tf_bot_msg_count_mv ;
GO

CREATE VIEW dbo.tf_bot_msg_count_mv
WITH SCHEMABINDING
   AS
      select  CONVERT(DATE, TF_LAST_UPDATED_AT) TF_DATE,COUNT_BIG(TF_MESSAGE_TEXT) TF_MSG_TXT,count_big(*) TOTAL_COUNT from dbo.tf_messages
      where TF_MESSAGE_SOURCE='B' 
      group by CONVERT(DATE, TF_LAST_UPDATED_AT),TF_MESSAGE_SOURCE
GO

select * from dbo.tf_bot_msg_count_mv

--Create an index on the view.
CREATE UNIQUE CLUSTERED INDEX BOT_MSG
   ON dbo.tf_bot_msg_count_mv (TF_DATE);
GO


