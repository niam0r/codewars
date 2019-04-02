def is_interesting(num, awesome_phrases)
  return 0 if num < 98

  if num >= 100 && interesting?(num, awesome_phrases)
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
  '1234567890'.include?(num.to_s) || '9876543210'.include?(num.to_s)
end
