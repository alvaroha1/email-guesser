exports.convertMail = (req, res) => {
  try {
    // gets object from request
    const { firstName, lastName, domain } = req.body.userData;
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
    const result = {success: isMail, mail: answer}
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};