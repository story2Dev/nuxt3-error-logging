export const useLogging  = () => {
    const sendLog = async (message) => {
          const req = await $fetch(`/api/discord`, {
            method:'POST',
            body:{
              message : JSON.stringify(message)
            }
          })
    }
    return {
        sendLog
    }
}