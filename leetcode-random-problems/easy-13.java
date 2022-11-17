import java.util.HashMap;

class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> values = new HashMap<Character, Integer>();
        values.put('I', 1);
        values.put('V', 5);
        values.put('X', 10);
        values.put('L', 50);
        values.put('C', 100);
        values.put('D', 500);
        values.put('M', 1000);

        int result = 0;
        int i = 0;
        while(i < s.length()){
            result += values.get(s.charAt(i));

            if(i > 0 && values.get(s.charAt(i)) > values.get(s.charAt(i-1))){
                result -= values.get(s.charAt(i-1))*2;
            }
            System.out.println(result);
            i++;
        }

        return result;
    };
}