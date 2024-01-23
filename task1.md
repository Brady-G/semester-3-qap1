# Task 1

### Buffer
> The buffer object in node is an object that allows teh allocation of a byte buffer a buffer can contain and n length amount of bytes, the buffer object has multiple ways of constructing, some unsafe and some safe the unsafe versions may contain old data whih is why it is faster as the safe version has to make sure and clean out any old data. The buffer can be used to easily convert byte data to other formats for example with a server connection you may only get bytes but you may need it as a string with buffer you can turn those bytes into a string.

### Process
> The Process object in node has information and control over the current process the code in being ran in, as such you can hook into events that let you do certain things when for example the process is being exited or when an error happens. You can also get information about the process with this such as the arguments. This is very useful especially with the events to handle unhandled errors this is essential for keeping an application online even if a small error occurs and it wasnt caught earlier on.

### Console
> Console is an essential part of development as it prints to the system out this is where most developers go to when debugging. The console object contains a multitude of methods not just log. It is important and needed for system logging.