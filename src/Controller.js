const StreakCounter = async (req, res) => {
  try {
    const { input } = req.body

    console.log("Form input: ", input)

    const cleanedInput = input.replace(/[^a-zA-Z]/g, "").toLowerCase()

    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < cleanedInput.length; i++) {
      const isEven = cleanedInput.charCodeAt(i) % 2 === 0;
      if (i === 0 || isEven === (cleanedInput.charCodeAt(i - 1) % 2 !== 0)) {
        currentStreak = 1;
      } else {
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }

    res.json({longestStreak})
  } catch (error) {
    res.status(500).send({"Error": error.message})
  }
}

module.exports = {StreakCounter}