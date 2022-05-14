<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CreateContentItem.aspx.cs" Inherits="nba.CreateContentItem" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <title>NBA|CreateContentItem</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="Styles.css"></head>
<body id="bg">
    <form id="form1" runat="server">
        <div>
            <div class="center">
    <div class="topnav">
        <a href="Home.aspx">בית</a>
        <a href="Registration.aspx">רישום</a>
        <a class="active"  href="CreateContentItem.aspx">יצירת תוכן</a>
        <a href="SharedContent.aspx">שיתוף תוכן</a>
        <a href="Gallery.aspx"> גלרייה</a>
        <a href="About.aspx">אודות</a>
    </div>
    <h2>יצירת תוכן</h2>
    <form>
    <p>שם משתמש</p><input type="text">
    <p>מייל</p><input type="email">
    <p>העלה תמונת של עצמך (אם אתה לא מעוניין תשאיר ריק)</p>
    <input type="file">
    <p>קבוצה אהודה</p>
    <input type="text">
    <p> לפי דעתך "NBA" קבוצה שתיקח השנה  את ה</p>
    <input type="text">
    <br><br>
    <input type="submit">  <input type="reset">
    </form>
</div>
<script src="main.js"></script>
        </div>
    </form>
</body>
</html>
