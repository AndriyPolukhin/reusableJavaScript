# Actual code
echo 'hello' &> /dev/null
echo 'hello' &> /dev/null 'goodbye'

echo 'hello' > /dev/null 2>&1
echo 'hello' 'goodbye' > /dev/null 2>&1

echo 'hello' &
echo 'hello' & goodbye > /dev/null
