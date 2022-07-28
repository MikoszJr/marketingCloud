// JavaScript Document

%%[ 
	
/* Treat external source as content in CloudPage 

// -->	%%=TreatAsContent(HTTPGet('https://github.com/MikoszJr/marketingCloud/blob/main/formHandler.html?dl=0&raw=1'))=%%

*/

/* Set Master Variables */
set @SFuserid = AttributeValue("sfUserId")
set @sendFromName = AttributeValue("sendFromName")

/* Set First Name */
set @firstName = AttributeValue("firstName")

IF Not Empty(@firstName)
THEN set @first_Name = @firstName
ELSE 
ENDIF

/* Dynamic Multivariate Subject Line */
VAR @option1, @option2
SET @option1 = "SubjectLine_1" 
SET @option2 = "SubjectLine_2" 

IF IndexOf(@SubjectLineDropdown,@option1) > 0 then 
    Set @subjectline = "Subject Line #1" 
ELSEIF IndexOf(@SubjectLineDropdown,@option2) > 0 then 
    Set @subjectline = "Subject Line #2"  
ELSE 
    Set @subjectline = "Default Subject Line" 
ENDIF 


/* Dynamic Custom Paragraph */
VAR @bcp1, @bcp2, @bccustom

SET @bcp1 = "Paragraph 1" 
SET @bcp2 = "Paragraph 2" 
SET @bccustom = "Custom" 


IF IndexOf(@bodycontent,@bcp1) > 0 then 
    Set @finalcontent = "Paragraph 1" 
ELSEIF IndexOf(@bodycontent,@bcp2) > 0 then 
    Set @finalcontent = "Paragraph 2"  
ELSEIF IndexOf(@bodycontent,@bccustom) > 0 then 
    Set @finalcontent = "Custom"  
ELSE 
    Set @finalcontent = "Paragraph 1" 
ENDIF

/* Insert Code for Dynamic Link */

VAR @asset1, @asset2, @asset3
SET @asset1 = "Option 1" 
SET @asset2 = "Option 2" 
SET @asset3 = "Option 3" 

IF IndexOf(@assetlink,@asset1) > 0 then 
    Set @assetlink = "Option 1" 
ELSEIF IndexOf(@assetlink,@asset2) > 0 then 
    Set @assetlink = "Option 2" 
ELSEIF IndexOf(@assetlink,@asset3) > 0 then 
    Set @assetlink = "Option 3"   
ELSE 
   Set @assetlink = "Default"   
ENDIF 


/* Dynamic Multivariate Signature Block */
VAR @sig1, @sig2
SET @sig1 = "Signature With Photo" 
SET @sig2 = "Signature Without Photo" 

IF IndexOf(@sig2,@SignatureBlock) > 0 then 
    Set @Signature = "Signature_withoutPhoto" 
ELSEIF IndexOf(@sig1,@SignatureBlock) > 0 then 
    Set @Signature = "Signature_withPhoto"  
ELSE 
    Set @Signature = "Signature_withoutPhoto" 
ENDIF 

]%%