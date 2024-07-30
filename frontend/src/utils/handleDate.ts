const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
    };
    return date.toLocaleDateString('en-US', options);
};


const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

const minutesToTime = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
};

const timeToDateString = (time: string) => {
    const [hours, minutes] = time.split(':');
    const currentDate = new Date();
    currentDate.setHours(parseInt(hours));
    currentDate.setMinutes(parseInt(minutes));
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    return currentDate.toISOString(); // or another string format if needed
};

export { formatDate, formatTime, minutesToTime, timeToDateString };
