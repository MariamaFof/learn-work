function getConfig(config= {}) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };

  return {
    ...defaultConfig,
    ...config,
    user: {
      ...defaultConfig.user,
      ...config.user,
    },
    hardware:{
      ...defaultConfig.hardware,
      ...config.hardware,
    },
  };
}

function logInfos(user) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };
  const userIdentity ={
    ...redactedUser,
    ...user, 
    address:{
      ...redactedUser.address,
      ...user.address,
    },
  };
  const {firstName, lastName,
    adress:{city, country},
  } = userIdentity;

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};
