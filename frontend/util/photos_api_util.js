export const getPhotos = () => {
  return (
    $.ajax({
      method: "GET",
      url: `api/photos/`,
    })
  )
}

export const getUserPhotos = (userId) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/users/${userId}/photos/`,
    })
  )
}

export const getPhoto = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/photos/${id}`,
    })
  )
}

export const createPhoto = (photo) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/photos`,
      data: {photo: photo}
    })
  )
}

export const editPhoto = (photo) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/photos/${photo.id}`,
      data: {photo: photo}
    })
  )
}

export const deletePhoto = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/photos/${id}`,
    })
  )
}
