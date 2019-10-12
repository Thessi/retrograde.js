export async function getBoard(boardId) {
  const response = await fetch(
    `https://api.retrograde.dyl.dog/boards/${boardId}`,
    {
      credentials: "include"
    }
  );
  return await response.json();
}

export async function getRanks(boardId) {
  const response = await fetch(
    `https://api.retrograde.dyl.dog/boards/${boardId}/ranks`,
    {
      credentials: "include"
    }
  );
  return await response.json();
}

export async function updateBoard(board) {
  const response = await fetch(`https://api.retrograde.dyl.dog/boards/${board.id}`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(board)
  });
  return await response.json();
}

export async function createRank(boardId, name) {
  let response = await fetch(`https://api.retrograde.dyl.dog/boards/${boardId}/ranks`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name
    })
  });
  return await response.json();
}

export async function createBoard(name) {
  let response = await fetch(`https://api.retrograde.dyl.dog/boards`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name
    })
  });
  return await response.json();
}

export async function getCards(boardId, rankId) {
  const response = await fetch(
    `https://api.retrograde.dyl.dog/boards/${boardId}/ranks/${rankId}/cards`,
    {
      credentials: "include"
    }
  );
  return await response.json();
}

export async function createCard(boardId, rankId, text) {
  const response = await fetch(
    `https://api.retrograde.dyl.dog/boards/${boardId}/ranks/${rankId}/cards`,
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Card",
        description: text
      })
    }
  );
  return await response.json();
}

export async function deleteRank(boardId, rankId) {
  const response = await fetch(
    `https://api.retrograde.dyl.dog/boards/${boardId}/ranks/${rankId}`,
    {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "include"
    }
  );
  return await response.json();
}