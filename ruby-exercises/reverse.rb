def reverse_string(s)
    return [] if s.empty?
    return reverse_string(s[1..-1]) << s[0]
end

print reverse_string(['h', 'e', 'l', 'l', 'o'])
puts