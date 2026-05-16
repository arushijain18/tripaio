//  this is used to handle the errors in case some wrong data is fed 
 module.exports = (fn) => {
    return (req,res,next) =>
    {
        fn(req,res,next).catch(next);
    }
};