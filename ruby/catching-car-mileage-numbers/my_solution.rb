require "minitest/autorun"

def is_interesting(num, awesome_phrases)
  return 0 if num < 98
  return 1 if num >= 98 && num < 100

  if interesting?(num, awesome_phrases)
    2
  elsif interesting?(num + 1, awesome_phrases) || interesting?(num + 2, awesome_phrases)
    1
  else
    0
  end
end

def interesting?(num, awesome_phrases)
  awesome_phrases.include?(num) || same_digits?(num) || palindrome?(num) || sequential?(num) || num.to_s.=~(/^\d0+/)
end

def same_digits?(num)
  num.to_s.chars.all? { |char| num.to_s.chars.first == char  }
end

def palindrome?(num)
  num.to_s == num.to_s.reverse
end

def sequential?(num)
  sequences = num.to_s.chars.map(&:to_i).each_cons(2)
  sequences.all? { |a,b| b == a + 1 } || sequences.all? { |a,b| b == a - 1 }
end

# class Test < Minitest::Test
#   describe "Basic inputs" do
#     it "should work, dangit!" do
#       assert_equal(is_interesting(3, [1337, 256]),     0);
#       assert_equal(is_interesting(1336, [1337, 256]),  1);
#       assert_equal(is_interesting(1337, [1337, 256]),  2);
#       assert_equal(is_interesting(11208, [1337, 256]), 0);
#       assert_equal(is_interesting(11209, [1337, 256]), 1);
#       assert_equal(is_interesting(11211, [1337, 256]), 2);
#     end
#   end
# end


# p interesting?(11208, [1337, 256])
# p same_digits?(11208)
# p palindrome?(11208)
p sequential?(11208)

# p is_interesting(11208, [1337, 256])

# p is_interesting(11209, [1337, 256])
# p is_interesting(11211, [1337, 256])

# p same_digits?(11113)
