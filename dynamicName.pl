%%[
VAR @fromName, @Territory
SET @Territory = "Florida"
SET @fromName = Lookup("DynamicSenderProfiles","fromName","Territory", @Territory)
]%%
%%=v(@fromName)=%%
