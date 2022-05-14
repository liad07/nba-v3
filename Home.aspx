<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="nba.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <title>NBA</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="Styles.css"></head>
<body id="bg">
    <form id="form1" runat="server">
        <div>
<table>
<div class="center">
    <div class="topnav">
        <a  class="active"  href="Home.aspx">בית</a>
        <a href="Registration.aspx">רישום</a>
        <a href="CreateContentItem.aspx">יצירת תוכן</a>
        <a href="SharedContent.aspx">שיתוף תוכן</a>
        <a href="Gallery.aspx"> גלרייה</a>
        <a href="About.aspx">אודות</a>
    </div>
</div>
</table>
<img id="img" onclick="rotateImg()" src="images/logo.jpg" width="200" height="200" >

<div class="center" >
<h1>ברוכים הבאים לאתר שלי</h1>
<h2>ליגת ה-NBA היא ליגת הכדורסל הבכירה של ארצות הברית</h2>
<h3>ונחשבת לליגת הכדורסל הטובה בעולם. הליגה מנוהלת על ידי התאחדות הכדורסל הלאומית</h3>
    <h4>ובזמני הפנוי צופה במשחקים "NBA" בחרתי באתר זה בגלל שאני חובב  </h4>

</div>
<br><br>
<form>
    <span id="mySpan">
        <p>שם משתמש</p>
    <input type="text" placeholder="username">
    <br><br>
         <p>סיסמא</p>
    <input type="password" placeholder="password">
        <br><br>
       <a href="Registration.aspx">לינק להרשמה</a>
        </span>
</form>
<script src="main.js"></script>
        </div>
    </form>
</body>
</html>
