function truncate(str, n)
{
    if (str.length <= n)
        return str;
    if (n <= 2)
        return str.substring(0, n) + "...";
    return str.substring(0, n -3) + "...";
}

console.log(
    truncate("A-tisket a-tasket A green and yellow basket", 11)
);