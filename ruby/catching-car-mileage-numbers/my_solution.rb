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
  num.to_s.chars.all? { |char| num.to_s.chars.first == char }
end

def palindrome?(num)
  num.to_s == num.to_s.reverse
end

def sequential?(num)
  "1234567890".include?(num.to_s) || "9876543210".include?(num.to_s)
end

# def sequential?(num)
#   sequences = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]
#   possible_sequences = sequences.map { |seq| seq.each_cons(num.to_s.length).map(&:join) }.flatten
#   possible_sequences.include?(num.to_s)
# end

