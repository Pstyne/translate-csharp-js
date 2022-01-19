// Not sure I needed a main function to make this work

void Main()
{
  List<string> insults = new List<string> {
    "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"    
  };

  List<int> indexes = new List<int> {};
  // When using a List use the Count property like you would length
  while (indexes.Count < 3)
  {
    int candidate = new Random().Next(0, insults.Count - 1);
    // I used Any and you must supply a function a lot like JS Filter
    if (!indexes.Any(e => e == candidate))
    {
      // Substitute push for Add
      // This is a List after all
      // Arrays and Lists are very different in C#
      // Mainly the way they work
      indexes.Add(candidate);
    }
  }

  for (int i = 0; i < indexes.Count; i++)
  {
    int index = indexes[i];
    Console.WriteLine(insults[index]);
  }
}

Main();