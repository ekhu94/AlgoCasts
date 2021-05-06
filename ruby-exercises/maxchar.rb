def max_char(s)
    counter = Hash.new(0)
    s.each_char do |char|
        counter[char] += 1
    end
    return counter.keys.max_by { |k, v| counter[k] }
end

puts max_char('0001112223344yyy55o2y2y31o2u412o24o1')