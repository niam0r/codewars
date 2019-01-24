require "minitest/autorun"
require_relative "my_solution"

class Test < Minitest::Test
  describe "Basic inputs" do
    it "should work, dangit!" do
      Test.assert_equals(is_interesting(3, [1337, 256]),     0);
      Test.assert_equals(is_interesting(1336, [1337, 256]),  1);
      Test.assert_equals(is_interesting(1337, [1337, 256]),  2);
      Test.assert_equals(is_interesting(11208, [1337, 256]), 0);
      Test.assert_equals(is_interesting(11209, [1337, 256]), 1);
      Test.assert_equals(is_interesting(11211, [1337, 256]), 2);
    end
  end
end
p sequential?(123456)
p sequential?(987654)
