const SERVER_ORIGIN = '';

// Url templates
const loginUrl = `${SERVER_ORIGIN}/login`;
const registerUrl = `${SERVER_ORIGIN}/register`;
const logoutUrl = `${SERVER_ORIGIN}/logout`;
const topGamesUrl = `${SERVER_ORIGIN}/game`;
const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;
const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;
const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;
const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;

export const login = (credential) => {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(credential)
  })
  .then((res) => {
    if (res.status !== 200) {
      throw Error('Fail to login!');
    }

    return res.json();
  })
};

export const register = (data) => {
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to register');
    }
  });
};

export const logout = () => {
  return fetch(logoutUrl, {
    method: 'POST',
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to log out');
    }
  })
};

export const getTopGames = () => {
  return fetch(topGamesUrl).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get top games');
    }
 
    return response.json();
  })
};

const getGameDetails = (gameName) => {
  return fetch(`${getGameDetailsUrl}${gameName}`).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the game');
    }
 
    return response.json();
  });
};

export const searchGameById = (gameId) => {
  return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the game');
    }
    return response.json();
  })
};
 
export const searchGameByName = (gameName) => {
  return getGameDetails(gameName).then((data) => {
    if (data && data.id) {
      return searchGameById(data.id);
    }
 
    throw Error('Fail to find the game')
  })
};

export const addFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ favorite: favItem })
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to add favorite item');
    }
  })
};
 
export const deleteFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ favorite: favItem })
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to delete favorite item');
    }
  })
};
 
export const getFavoriteItem = () => {
  return fetch(favoriteItemUrl, {
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get favorite item');
    }
 
    return response.json();
  })
};

export const getRecommendations = () => {
  return fetch(getRecommendedItemsUrl, {
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      console.log(response);
      throw Error('Fail to get recommended item');
    }
 
    return response.json();
  })
};



