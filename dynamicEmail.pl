%%[
VAR @fromEmail, @Territory
SET @Territory = "Florida"
SET @fromEmail = Lookup("DynamicSenderProfiles","fromEmail","Territory", @Territory)
]%%
%%=v(@fromEmail)=%%
