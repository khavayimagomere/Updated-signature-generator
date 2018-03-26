class Template {
  constructor(data) {
    this.signature = `
      <!DOCTYPE html>
        <html>
          <head>
            <title>Email Signature Generator</title>
          </head>
        
          <body>
              <table style="width:100%; border-collapse: collapse;" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td width="80" style="width:80px; max-width:80px;" >
                  <img width="80" src="images/logo.svg">
                </td>
                
                <td width="15" bgcolor="white" style="width:15px; max-width:15px;"></td>
                
                <td width="2" bgcolor="#252a35" style="width:2px; max-width:2px; background-color:#252a35;">&nbsp;</td>
                
                <td width="15" bgcolor="white" style="width:15px; max-width:15px"></td>
                
                <td valign:midddle; style="font-family:Sans-serif; font-size:small; line-height:1em;">
                  <p style="margin:8px; color:#252a35;">
                    <strong>${data.fullname}</strong>
                  </p>
                  <p style="margin:8px; color:#a29f9f;"> ${data.position} </p>
                 <p style="margin:8px; color:#a29f9f; font-weight:300;"> ${data.mobile} | <a href="https://www.twigafoods.com">www.twigafoods.com</a> </p>
                </td>
              </tr>
            </table>
          </body>
        </html>
    `
  }
}