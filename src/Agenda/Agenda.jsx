
import'../Agenda/Agenda.css'
export function Agenda(){
    return(
        <>
        <form action="">
        <form>
  <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span>como te llamas?</span></label>
  <textarea name="message" rows="2" class="question" id="msg" required autocomplete="off"></textarea>
  <label for="msg"><span>para donde es el domicilio?</span></label>
  <input type="submit" value="Submit!" />
</form>
        </form>
        </>
    )
}