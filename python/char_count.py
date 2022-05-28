def char_count(string):
  """Return a list of iterations for each unique letter from the given string

  Args:
      string (string): A given string to evaluate
  """
  # Let's filter the string for all white spaces before evaluating it
  filtered_string = string.replace(' ', '')
  # Initialize result list
  result = []
  # Let's loop through characters in the filtered string
  for char in list(filtered_string):
        # Identify if the char is unique
        if any(char in elem for elem in result):
              # We've already come across these, let's increment
              for elem in range(len(result)):
                    # Does the result at the current index equal the character
                    if result[elem][0] == char:
                          # We found the element in the list increment
                          result[elem][1] += 1
        else:
              # Let's add the char to the list for the first time
              result.append([char, 1])
  # Result list is now filled, let's sort it
  return sorted(result, key=lambda x : (-x[1], x[0]))

