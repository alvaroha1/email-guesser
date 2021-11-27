exports.convertMail = (req, res) => {
  try {
    // gets object from request
    const { firstName, lastName, domain } = req.body.userData;
    // adds case if user data undefined
    if (firstName === undefined || lastName === undefined || domain === undefined) {
      const errorMessage = { error: true, message: "Please complete the form" }
      res.status(200).json(errorMessage);
    }
    // adds case if domain includes @
    if (domain.includes("@")) {
      const errorMessage = { error: true, message: "Please remove the @ from the domain" }
      res.status(200).json(errorMessage);
    }
    // performs operation with data
    let answer;
    let isMail;
    if (domain === "babbel.com") {
      answer = firstName[0].toLowerCase() + lastName.toLowerCase() + "@" + domain;
      isMail = true;
    } else if (domain === "linkedin.com" || domain === "google.com") {
      answer = firstName.toLowerCase() + lastName.toLowerCase() + "@" + domain;
      isMail = true;
    } else {
      answer = "Derivation is not possible";
      isMail = false;
    }
    // sends object back
    const result = { success: isMail, mail: answer }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};