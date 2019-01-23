def is_interesting(number, awesome_phrases)


  # returns 2 if the number is "interesting" (see below)
  # returns 1 if an interesting number occurs within the next two miles
  # returns 0 if the number is not interesting.
end

def palindrome?(number)
  number.to_s == number.to_s.reverse
end

def sequential?(number)
  sequences = number.to_s.chars.map(&:to_i).each_cons(2)
  sequences.all? { |a,b| b == a + 1 } || sequences.all? { |a,b| b == a - 1 }
end

# "Interesting" Numbers
# Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

# Any digit followed by all zeros: 100, 90000
# Every digit is the same number: 1111
# The digits are sequential, incementing†: 1234
# The digits are sequential, decrementing‡: 4321
# The digits are a palindrome: 1221 or 73837
# The digits match one of the values in the awesome_phrases array
# † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
# ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

# p sequential?(123456)
# p sequential?(987654)
